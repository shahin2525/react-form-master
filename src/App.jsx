import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("even data", data);
  };
  const handleProfileSubmit = (data) => {
    console.log("even data", data);
  };
  return (
    <>
      <h1>react vite</h1>
      <Form handelSubmit={handleSignUpSubmit}>
        <h1>Sign up</h1>
        <p>please sign up right now</p>
      </Form>
      <Form handelSubmit={handleProfileSubmit}>
        <h1>Update profile</h1>
        <p>Always update your profile</p>
      </Form>
    </>
  );
}

export default App;
