---
sidebar_position: 2
title: Unit Test
description: Unit testing is a type of testing on an application where testing is focused on what is called a unit. Unit is the smallest part that builds up the application. The simplest examples of units when we talk about OOP (Object-Oriented Programming) are Class and Function. Unit testing will ensure that small components of an application run well and as expected.
---

Unit testing is a type of testing on an application where testing is focused on what is called a unit. Unit is the smallest part that builds up the application. The simplest examples of units when we talk about OOP (Object-Oriented Programming) are Class and Function. Unit testing will ensure that small components of an application run well and as expected.

## Bloc Test
example: 

```js
blocTest(
    'Initial bloc state, data length is 0',
    build: () => MovieListBloc(mockRepository),
    expect: () => [
        // no state
    ],
    verify: (bloc) {
        expect(bloc.movies.length, 0);
    },
);


blocTest(
    'Parsing JSON movie list, with null safety',
    build: () => MovieListBloc(repository),
    setUp: () async {
        final file = File('test/movie_list/unit/movies.json');
        final json = jsonDecode(await file.readAsString());

        when(mockClient.get(
            Endpoint.movieList,
            queryParameters: {'size': 20, 'page': 1},
        )).thenAnswer((realInvocation) async => Response(
                statusCode: 200,
                requestOptions: RequestOptions(),
                data: json,
            ));
    },
    act: (bloc) {
        bloc.add(const GetMovies());
    },
    expect: () => [
        isA<MovieListLoading>(),
        isA<MovieListLoaded>(),
    ],
    verify: (bloc) async {
        expect(
            await repository.getMovies(size: 20, page: 1),
            isA<Result<BaseResponse<List<MovieModel>>>>(),
        );
    },
);

blocTest(
    'Get data movies initial, '
    'size = 20, '
    'page after success = 2, '
    'data movies length = 20, ',
    build: () => MovieListBloc(mockRepository),
    act: (bloc) {
        var result = Result(
            Response(requestOptions: mockRequest),
            data: BaseResponse(
                status: 'success',
                info: null,
                data: List.generate(
                bloc.size,
                (index) => MovieModel(
                    id: index,
                    title: 'title',
                    description: 'description',
                    createdDate: DateTime.now(),
                    poster: 'poster',
                ),
                )),
        );

        when(mockRepository.getMovies(size: bloc.size, page: bloc.page))
            .thenAnswer((realInvocation) async => result);

        bloc.add(const GetMovies());
    },
    expect: () => [
        isA<MovieListLoading>(),
        isA<MovieListLoaded>(),
    ],
    verify: (bloc) {
        expect(bloc.size, 20);
        expect(bloc.page, 2);
        expect(bloc.movies.length, bloc.size);
        verify(mockRepository.getMovies(size: bloc.size, page: 1)).called(1);
    },
);

```