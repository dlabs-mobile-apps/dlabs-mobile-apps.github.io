import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { LoginGoogle } from "@site/src/components/login-google";
import { Col, Row } from "react-bootstrap";
import useBaseUrl from "@docusaurus/useBaseUrl";
const CryptoJS = require("crypto-js");

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

      let encrypted = encrypt(email, customFields.aesKey);
      localStorage.setItem("s", encrypted);
      
      let decrypted = decrypt(encrypted, customFields.aesKey);
      isAccessAllowed(decrypted);
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

  useEffect(() => {
    let emailLocal = localStorage.getItem("s");
    if (emailLocal != null) {
      let decrypted = decrypt(emailLocal, customFields.aesKey);
      isAccessAllowed(decrypted);
    }
  });

  if (!loggedIn) {
    console.log(process.env.NODE_ENV);
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
