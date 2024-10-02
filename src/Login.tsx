import React from 'react';
import './Auth.css';

const Login: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직
  };

  return (
    <div className="auth-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">사용자 이름:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
