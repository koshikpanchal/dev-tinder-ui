import axios from "axios";
import { useState } from "react";

const Login: React.FC = () => {
  const [emailId, setEmailId] = useState<string>("cp@gmail.com");
  const [password, setPassword] = useState<string>("Chanda@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (error) {
      console.log("Something went wrong " + error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-dash bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Id</legend>
            <input
              type="text"
              className="input"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
