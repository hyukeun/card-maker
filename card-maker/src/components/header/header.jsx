import React from 'react';
import styles from './header.module.css'; // styles은 같은 폴더 안에 있는 곳에 넣어서 가져와 준다.

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;


//header 안에 props에 로그인이 되어있다면 로그아웃을 할 수 있는 콜백함수를 받아올 것이다. 

//logout 버튼이 전달되면 로그아웃 버튼을 보여줄 것이다. 