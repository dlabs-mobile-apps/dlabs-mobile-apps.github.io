import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import Layout from "@theme/Layout";
import React from "react";
import logo from "../../../static/img/mobi.png";
import clsx from "clsx";
import styles from "./styles.module.css";

export function LoginGoogle({ login, denied }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const clientId = customFields.googleClientId;

  function handleError() {
    console.error("Failed to sign in with Google.");
  }

  function handleSuccess(creds) {
    const plaintext = decode(creds.credential);

    if (!plaintext) {
      return;
    }
    const payload = JSON.parse(plaintext);
    if (isAllowed({ email: payload.email })) {
      login(payload.email, { denied: false });
    } else {
      login(null, { denied: true });
    }
  }

  // Checks if the supplied email address is allowed to see the page.
  function isAllowed({ email }) {
    let allowedUsers = [];

    if (typeof customFields.allowedUsers === "string") {
      allowedUsers = customFields.allowedUsers.split(",").map((e) => e.trim());
    }
    if (allowedUsers.includes(email)) {
      return true;
    }
    return false;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className={styles.heroBanner}>
        <img
          src={logo}
          alt="logo"
          width={120}
          height={120}
          style={{ marginTop: 30, marginBottom: 40 }}
        />

        <p className={styles.title}>
          Please sign in to your Google account to get access.
        </p>

        {denied ? (
          <em className={styles.subtitle}>
            You're not authorized, please contact admin to get access
          </em>
        ) : (
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            shape="circle"
            size="large"
            theme="filled_blue"
            width="200px"
          ></GoogleLogin>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

// Function to decode the JWT from Google to get the user's email address.
function decode(jwt) {
  const parts = jwt.split(".");
  if (parts.length !== 3) {
    return "";
  }
  return window.atob(parts[1]);
}
