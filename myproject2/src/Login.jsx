import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-card">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="options">
        <label>
          <input type="checkbox" /> remember me
        </label>
        <span>forgot password</span>
      </div>

      <button>Login</button>

      <p className="create">Create Account</p>
    </div>
  );
};

export default Login;