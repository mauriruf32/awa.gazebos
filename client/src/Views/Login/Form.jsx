import React, { useState } from "react";
import styles from "./Form.module.css";
import validator from "./validation";

function Form(props) {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.form}>
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputbox}>
          <label>Email</label>
          <input
            type="text"
            value={userData.email}
            name="email"
            onChange={handleChange}
          />
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>
        <div className={styles.inputbox}>
        <label>Password</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        </div>
        <div className={styles.inputbox}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;