import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const nameRef = useRef(null);
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
  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    // console.log(name, email, password);
  };
  return (
    <div className="border-2 rounded border-green-300 w-fit">
      <form onSubmit={handelSubmit}>
        <input ref={nameRef} type="text" name="name" placeholder="name" />
        <br></br>
        <input
          //   onChange={handleEmail}
          ref={emailRef}
          type="email"
          name="email"
          placeholder="email"
        />
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
