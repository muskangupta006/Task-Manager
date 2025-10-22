import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    emailFormat: false,
    passwordMismatch: false,
  });

  const titleStyle = {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 30,
    fontSize: 25,
    fontWeight: "bold",
  };

  const inputBlockStyle = {
    display: "block",
    width: "100%",
    borderRadius: "0.375rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    paddingLeft: "0.75rem",
    color: "#111827",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    border: "1px solid rgba(209, 213, 219, 1)",
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
    boxSizing: "border-box",
    "::placeholder": {
      color: "#9CA3AF",
    },
    ":focus": {
      outline: "none",
      boxShadow: "0 0 0 2px inset rgba(79, 70, 229, 1)",
    },
  };

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    placeContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: "24rem",
    gap: "1.5rem",
  };

  const buttonStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    borderRadius: "0.375rem",
    backgroundColor: "#FF00FF",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
    color: "#ffffff",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    outline: "none",
  };

  const incorrectCombStyle = {
    color: "red",
  };

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const { email, password, confirmPassword } = user;

    if (!validateEmail(email)) {
      setError({ emailFormat: true, passwordMismatch: false });
    } else if (password !== confirmPassword) {
      setError({ emailFormat: false, passwordMismatch: true });
    } else {
      setError({ emailFormat: false, passwordMismatch: false });
      // Handle sign-up logic (e.g., API call, navigation)
      navigate("/dashboard");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Sign Up</div>
      <div>
        <label htmlFor="name" style={{ fontSize: "1.2rem", fontWeight: 750 }}>
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            required
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={inputBlockStyle}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" style={{ fontSize: "1.2rem", fontWeight: 750 }}>
          Email
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={inputBlockStyle}
          />
        </div>
        {error.emailFormat && (
          <p style={incorrectCombStyle}>Invalid email format</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          style={{ fontSize: "1.2rem", fontWeight: 750 }}
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            style={inputBlockStyle}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          style={{ fontSize: "1.2rem", fontWeight: 750 }}
        >
          Confirm Password
        </label>
        <div className="mt-2">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            style={inputBlockStyle}
          />
        </div>
        {error.passwordMismatch && (
          <p style={incorrectCombStyle}>Passwords do not match</p>
        )}
      </div>
      <div>
        <button type="submit" onClick={handleSubmit} style={buttonStyle}>
          Sign up
        </button>
      </div>
    </div>
  );
}