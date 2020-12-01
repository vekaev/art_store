import React from "react";

import Form from "./Form/Form";

const logInData = {
  number: "",
  email: "",
  name: "",
  question: "",
};

export default function Contact() {
  return (
    <h1>
      <Form initialData={logInData} onSubmit={console.log} />
    </h1>
  );
}
