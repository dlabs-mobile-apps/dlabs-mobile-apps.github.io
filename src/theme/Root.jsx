import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { LoginGoogle } from "@site/src/components/login-google";
const CryptoJS = require("crypto-js");

export default function Root({ children }) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isDenied, setIsDenied] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const isAccessAllowed = (email, { payload }) => {
    try {
      setLoading(true);

      let eData = payload.data;
      let dUsers = [];

      for (let i = 0; i < eData.length; i++) {
        var e = decrypt(eData[i].u, payload.col);
        dUsers.push(e);
      }

      if (dUsers.includes(email)) {
        setLoggedIn(true);
        let encrypted = encrypt(email, payload.row);
        localStorage.setItem("u", encrypted);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      } else {
        setIsDenied(true);
        setLoggedIn(false);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    } catch (error) {
      setError(error);
    }
  };

  const checkEmail = (email) => {
    if (email != null) {
      setIsDenied(false);

      isAccessAllowed(email, { payload: data });
    }
  };

  function encrypt(plainText, secret) {
    var key = CryptoJS.enc.Utf8.parse(secret);
    let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));

    // Encrypt the plaintext
    var cipherText = CryptoJS.AES.encrypt(plainText, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return cipherText.toString();
  }

  function decrypt(cipherText, secret) {
    var key = CryptoJS.enc.Utf8.parse(secret);
    let iv = CryptoJS.lib.WordArray.create(key.words.slice(0, 4));
    var cipherBytes = CryptoJS.enc.Base64.parse(cipherText);

    var decrypted = CryptoJS.AES.decrypt({ ciphertext: cipherBytes }, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  // Function to fetch data
  const fetchData = async () => {
    try {
      const apiKey =
        "AKfycby_AxtB4v4xz6YJDB_9Yehe5jtb6lsgd7oyRJaxeL8W4-vfBMu-woh9MVIF2CwDjvVlRA";
      const url = `https://script.google.com/macros/s/${apiKey}/exec`;
      // Make a GET request using the Fetch API
      const response = await fetch(url);

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data from the response
      const result = await response.json();

      // Update the state with the fetched data
      setData(result);

      let emailLocal = localStorage.getItem("u");
      if (emailLocal != null) {
        let decrypted = decrypt(emailLocal, result.row);
        isAccessAllowed(decrypted, { payload: result });
      }
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error != null) {
    return (
      <div style={{ margin: "auto", textAlign: "center" }}>
        <p style={{ fontSize: "36pt", fontWeight: "bold" }}>
          Something Went Wrong
        </p>
        <em>${error.message}</em>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container-loader">
        <div className="loader"></div>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <Container className="container-fluid">
        <LoginGoogle
          login={checkEmail}
          denied={isDenied === true}
        ></LoginGoogle>
      </Container>
    );
  }

  return <>{children}</>;
}
