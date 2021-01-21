import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';

function App({authService}) {
  return (
    <div class={styles.app}>
      <Login authService={authService}/> 
    </div>
  // 작성해주고 login에 와서 또 전달하는 함수를 만들어 준다.
  )
}

export default App;

// react component인지 순수 자바스크립트 클래스코드이거나 이런 파일들을 만드는 경우가 있는데  헷갈림을 방지하기 위해 jsx로 설정을 해주었다.
// index는 엄밀히 말하면 자바스크립트이다. 컴포넌트가 아니며 단순히 연결해주는 역할만 하기 때문이다. 