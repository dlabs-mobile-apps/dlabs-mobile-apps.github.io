import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { LoginGoogle } from "@site/src/components/login-google";
import { Col, Row } from "react-bootstrap";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Root({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const isAccessAllowed = (email) => {
    let allowedUsers = [];

    if (typeof customFields.allowedUsers === "string") {
      allowedUsers = customFields.allowedUsers.split(",").map((e) => e.trim());
    }

    if (allowedUsers.includes(email)) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const setEmailToLocal = (email, { denied = false }) => {
    if (denied) {
      setIsDenied(true);
    }
    if (email != null) {
      setIsDenied(false);
      localStorage.setItem("email", email);
      isAccessAllowed(email);
    }
  };

  useEffect(() => {
    let emailLocal = localStorage.getItem("email");
    if (emailLocal != null) {
      isAccessAllowed(emailLocal);
    }
  });

  if (!loggedIn) {
    console.log(process.env.NODE_ENV)
    return (
      <Container className="container-fluid">
        <LoginGoogle
          login={setEmailToLocal}
          denied={isDenied === true}
        ></LoginGoogle>
      </Container>
    );
  }

  return <>{children}</>;
}
