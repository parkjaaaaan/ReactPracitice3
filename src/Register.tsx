import React from 'react';
import './Auth.css';

const Register: React.FC = () => {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직
  };

  return (
    <div className="auth-container">
      <h2>회원가입</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">사용자 이름:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Register;
