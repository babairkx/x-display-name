// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullname, setFullname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFullname(`${fname} ${lname}`);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullname && <p>Full Name: {fullname}</p>}
    </div>
  );
}

export default App;
