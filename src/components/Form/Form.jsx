// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

import { useRef, useState } from "react";

const Form = ({ handelSubmit, children }) => {
  const [name, setName] = useState(null);
  //   const [email, setEmail] = useState(null);
  //   const [password, setPassword] = useState(null);
  // const nameRef = useRef(null);
  console.log(name);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //   const handleName = (e) => {
  //     const name = e.target.value;
  //     setName(name);
  //   };
  //   const handleEmail = (e) => {
  //     const email = e.target.value;
  //     setEmail(email);
  //   };
  //   const handlePassword = (e) => {
  //     const password = e.target.value;
  //     setPassword(password);
  //   };

  const handelLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      //   name: e.target.name.value,
      //   email: e.target.email.value,
      //   password: e.target.password.value,

      // name: nameRef.current.value,
      name: name,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    handelSubmit(data);
    // console.log(nameRef.current.value);
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current.value);

    // console.log(name, email, password);
  };
  return (
    <div className="border-2 rounded border-green-300 w-fit">
      {children}
      <form onSubmit={handelLocalSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          // ref={nameRef}
          placeholder="name"
        />
        <br></br>
        <input ref={emailRef} type="email" name="email" placeholder="email" />
        <br></br>
        <input
          ref={passwordRef}
          //   onChange={handlePassword}
          type="password"
          name="password"
          placeholder="password"
        />
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
