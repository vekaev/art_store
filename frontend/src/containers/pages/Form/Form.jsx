import React, { useState } from "react";

import InputField from "./Input";

export default function Form({ initialData, onSubmit }) {
  const [logInData, setLogInData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(logInData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Numer kontaktowy *"
        type="tel"
        value={logInData.number}
        onChange={(e) => setLogInData({ ...logInData, number: e.target.value })}
      />

      <InputField
        label="E-mail *"
        type="email"
        value={logInData.email}
        onChange={(e) => setLogInData({ ...logInData, email: e.target.value })}
      />

      <InputField
        label="Imię i Nazwisko *"
        type="text"
        value={logInData.name}
        onChange={(e) => setLogInData({ ...logInData, name: e.target.value })}
      />

      <InputField
        label="Napisz swoje pytanie (100 słów)"
        type="text"
        value={logInData.question}
        onChange={(e) =>
          setLogInData({ ...logInData, question: e.target.value })
        }
      />

      <button>wyślij</button>
    </form>
  );
}
