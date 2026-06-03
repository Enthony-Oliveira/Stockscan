import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/scanner");
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.headerText}>LOGIN</h3>

      <div style={styles.logoContainer}>
        <div style={styles.logoPlaceholder}>
          <span style={{ fontWeight: "bold", color: "#0A8754" }}>EMS</span>
        </div>
        <h1 style={styles.brandTitle}>StockScan Mobile</h1>
        <p style={styles.subtitle}>Bem-vindo de volta</p>
      </div>

      <form onSubmit={handleLogin} style={styles.formContainer}>
        <label style={styles.label}>E-mail Institucional</label>
        <input
          type="email"
          required
          placeholder="Digite seu e-mail"
          style={styles.input}
        />

        <label style={styles.label}>Senha</label>
        <div style={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Digite sua senha"
            style={styles.inputPass}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div style={styles.secureContainer}>
          <Lock size={14} color="#0A8754" />
          <span style={styles.secureText}>Acesso seguro</span>
        </div>

        <button type="submit" style={styles.loginButton}>
          Acessar Sistema
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    minHeight: "100vh",
    backgroundColor: "#F7F7F7",
    fontFamily: "sans-serif",
  },
  headerText: {
    textAlign: "center",
    color: "#333",
    letterSpacing: "1px",
    marginTop: "10px",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
  },
  logoPlaceholder: {
    width: "80px",
    height: "80px",
    border: "2px solid #333",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  },
  brandTitle: { margin: "0", fontSize: "28px", color: "#222" },
  subtitle: { color: "#666", marginTop: "5px" },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "40px",
    flex: 1,
  },
  label: { marginBottom: "8px", fontWeight: "bold", color: "#333" },
  input: {
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "16px",
  },
  passwordWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    overflow: "hidden",
  },
  inputPass: {
    flex: 1,
    padding: "15px",
    border: "none",
    outline: "none",
    fontSize: "16px",
  },
  eyeButton: {
    padding: "0 15px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#666",
  },
  secureContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "30px",
  },
  secureText: {
    color: "#0A8754",
    marginLeft: "6px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#0A8754",
    color: "#fff",
    border: "none",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
