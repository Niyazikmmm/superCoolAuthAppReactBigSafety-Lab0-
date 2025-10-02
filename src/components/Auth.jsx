import { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      login: login,
      password: password,
    });
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Логин:</label>
          <input
            id="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите логин"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </div>

        <button type="submit">Отправить</button>
      </form>

      {submittedData && (
        <div className="auth__output">
          <h3>Введённые данные:</h3>
          <p>
            <strong>Логин:</strong> {submittedData.login}
          </p>
          <p>
            <strong>Пароль:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
