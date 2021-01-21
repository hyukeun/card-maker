import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
      state: {id: userId},
    });
  }

    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    };

    useEffect(() => {
      authService.onAuthChange(user => {
        user && goToMaker(user.uid);
      });
    }); 
    // user.uid라는 것을 만들어 주었고 callback함수를 이용해서 작성해 주었다. 

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