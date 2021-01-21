import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
// login 이라는 function을 만들어 줄 것이다. 

const Login = ({authService}) => {

    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(console.log); // authService라는 것을 이용할것인데 우리가 provider에 있는 것을 전달해 줘야한다.
    };

    // 그래서 이름은 우리가 버튼에 들어있는 텍스트들을 이용해 주면 된다 .

    return (
        <section className={styles.login}>
          <Header />
          <section>
            <h1>Login</h1>
            <ul className={styles.list}>
              <li className={styles.item}>
                <button className={styles.button} onClick={onLogin}>
                  Google
                </button>
              </li>
              <li className={styles.item}>
                <button className={styles.button} onClick={onLogin}>
                  Github
                </button>
              </li>
            </ul>
          </section>
          <Footer />
        </section>
      );
    };
    

export default Login;