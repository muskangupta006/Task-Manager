import { useState } from "react";
import HeaderComponent from "../my_components/Header";

export default function Profile() {
  const [editingName, setEditingName] = useState(false);
  const [name, setName] = useState("First name Last name");
  const [email] = useState("exampleemail123@gmail.com");

  const [editingPassword, setEditingPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [profilePic, setProfilePic] = useState(null);

  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Name saved:", name);
      setEditingName(false);
    }
  };

  /** Handle Profile Picture Upload */
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /** Save Password */
  const handleSavePassword = () => {
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Password updated successfully!");

    console.log("Password saved");

    setTimeout(() => {
      setEditingPassword(false);
      setPasswords({ newPassword: "", confirmNewPassword: "" });
      setSuccess("");
    }, 1500);
  };

  return (
    <div>

      <div style={styles.pageContainer}>
        <div style={styles.profileBox}>
          {/* Profile Picture */}
          <div style={styles.profilePicContainer}>
            <label htmlFor="profilePicUpload" style={styles.profilePic}>
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  style={styles.profileImage}
                />
              ) : (
                "Profile pic"
              )}
            </label>
            <input
              id="profilePicUpload"
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{ display: "none" }}
            />
            <button
              style={styles.changeButton}
              onClick={() =>
                document.getElementById("profilePicUpload").click()
              }
            >
              Change
            </button>
          </div>

          {/* Name & Email */}
          <div style={styles.infoContainer}>
            <div
              style={{
                ...styles.nameBox,
                border: editingName ? "2px solid #004BDC" : "1px solid #ccc",
              }}
              onClick={() => setEditingName(true)}
            >
              {editingName ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleNameKeyDown}
                  onBlur={() => {
                    console.log("Name saved:", name);
                    setEditingName(false);
                  }}
                  autoFocus
                  style={styles.inputField}
                />
              ) : (
                <span>{name}</span>
              )}
            </div>
            <p style={styles.text}>Email: {email}</p>

            {/* Password Section */}
            {!editingPassword ? (
              <p style={styles.text}>
                Password: **********{" "}
                <a
                  href="#"
                  style={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    setEditingPassword(true);
                  }}
                >
                  (change password)
                </a>
              </p>
            ) : (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <label style={{ fontWeight: "bold", display: "block" }}>
                  New Password
                </label>
                <input
                  type="password"
                  value={passwords.newPassword}
                  onChange={(e) =>
                    setPasswords({ ...passwords, newPassword: e.target.value })
                  }
                  required
                  style={styles.inputField}
                />

                <label
                  style={{
                    fontWeight: "bold",
                    display: "block",
                    marginTop: "10px",
                  }}
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwords.confirmNewPassword}
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      confirmNewPassword: e.target.value,
                    })
                  }
                  required
                  style={styles.inputField}
                />

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                <div style={{ marginTop: "10px" }}>
                  <button
                    onClick={() => {
                      console.log("Password saved");
                      handleSavePassword();
                    }}
                    style={styles.saveButton}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingPassword(false)}
                    style={styles.cancelButton}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 80px)",
    width: "100%",
  },
  profileBox: {
    width: "50%",
    padding: 40,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  profilePicContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    cursor: "pointer",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  changeButton: {
    marginTop: 10,
    textDecoration: "underline",
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "blue",
    fontSize: 16,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    margin: "10px 0",
  },
  link: {
    color: "#004BDC",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  nameBox: {
    fontSize: 20,
    padding: "10px 15px",
    textAlign: "center",
    borderRadius: 5,
    cursor: "pointer",
    minWidth: 250,
  },
  inputField: {
    fontSize: 18,
    padding: "5px",
    width: "100%",
    border: "none",
    outline: "none",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#004BDC",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
    fontSize: 16,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "gray",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: 5,
    fontSize: 16,
  },
};