import React from "react";
import { Button } from "./Button";
import styles from './Newsletter.module.css'

// a basic form
const NewsletterForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className={styles['form-container']} style={style}>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
      className={styles['input']}
        ref={node => (input = node)}
        type="email"
        placeholder="Your email goes here"
      />
      <Button buttonSize={'btn--large'} buttonStyle={'btn--call-to-action'} onClick={submit}>Join</Button>
    </div>
  );
};

export default NewsletterForm;