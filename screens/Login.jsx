import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [isIncorrect, setIsIncorrect] = useState(false);

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
    backgroundColor: "#004BDC",
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
    border: "none",
  };

  const incorrectCombStyle = {
    color: "red",
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (user.username == "" || user.password == "") setIsIncorrect(true);
    else {
      setIsIncorrect(false);
      navigate("/dashboard");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Rose Academies</div>{" "}
      <div>
        <label htmlFor="email" style={{ fontSize: "1.2rem", fontWeight: 750 }}>
          Username
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            style={inputBlockStyle}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label
            htmlFor="password"
            style={{ fontSize: "1.2rem", fontWeight: 750 }}
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            style={inputBlockStyle}
          />
        </div>
        <p style={incorrectCombStyle}>
          {isIncorrect ? "Username and/or Password is Incorrect" : ""}
        </p>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit} style={buttonStyle}>
          Sign in
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}