import React from "react";
import styles from "./ContactForm.module.css"; // Corrected import path
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            icon={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button icon={<FaPhoneAlt fontSize="24px" />} text="VIA CALL" />
        </div>
        <Button
          isOutline={true}
          icon={<HiMail fontSize="24px" />}
          text="VIA MAIL FORM"
        />
        <form onSubmit={onSubmit}>
          <div className={styles.formContainer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formContainer}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formContainer}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <Button text="Submit" />
          <div>{name + " / " + email + " / " + text}</div>
        </form>
      </div>
      <div className={styles.image}>
        <img src="./images/hero-image.png" alt="hero-image" />
      </div>
    </section>
  );
};

export default ContactForm;
