import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = ({ data }) => {
  // data.contacts.contactInfo.map((item) => console.log(item.type));
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{data.contacts.title}</h2>
        <p>{data.contacts.description}</p>
      </div>
      <ul className={styles.links}>
        {data.contacts.contactInfo.map((item) => {
          return (
            <li key={item.contactId} className={styles.link}>
              <img src={getImageUrl(`${item.icon}`)} alt={item.alt} />
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
        <li className={styles.link}>
          <img
            src={getImageUrl(data.contacts.emailInfo.icon)}
            alt="LinkedIn icon"
          />
          <a href={`mailto:${data.contacts.emailInfo.emailId}`}>
            {data.contacts.emailInfo.emailId}
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
