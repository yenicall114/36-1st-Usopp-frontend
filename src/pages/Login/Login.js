import { useState } from 'react';
import Sign from './SignMode/Sign';
import SignUp from './SignMode/SignUp';
import SignIn from './SignMode/SignIn';
import './Login.scss';

const Login = () => {
  const [signMode, setSignMode] = useState('signIn');
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
  });

  const [checkBox, setCheckBox] = useState({ first: false, second: false });

  const signDisabled =
    inputValue.email.includes('@') &&
    inputValue.email.includes('.com') &&
    inputValue.email.length >= 5;

  const signUpDisabled =
    signDisabled &&
    inputValue.password.length >= 8 &&
    inputValue.firstName.length >= 1 &&
    inputValue.lastName.length >= 1;

  const signBtnColor = signDisabled ? '#333' : '#cecccc';

  const signUpBtnColor = signUpDisabled ? '#333' : '#cecccc';

  const checked = e => {
    const { name } = e.target;
    setCheckBox({ ...checkBox, [name]: !checkBox[name] });
  };

  const saveInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signIn = () =>
    signMode === 'signIn' ? setSignMode('signUp') : setSignMode('signIn');

  const confirm = e => {
    e.preventDefault();
    fetch('./data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.email,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw alert('response is not ok ');
      })
      .then(data => {
        if (data.sign === '회원가입') {
          setSignMode('signUp');
        } else if (data.sign === '로그인') {
          setSignMode('signIn');
        }
      });
  };

  const goToSignUP = e => {
    e.preventDefault();
    if (inputValue.password === inputValue.passwordConfirm) {
      if (checkBox.first === true && checkBox.second === true) {
        fetch('./data/data.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: inputValue.email,
            password: inputValue.password,
            firstName: inputValue.firstName,
            lastName: inputValue.lastName,
          }),
        });
      } else {
        alert('약관 동의가 필요합니다.');
      }
    } else {
      alert('패스워드가 일치하지 않습니다.');
    }
  };

  const showSign = {
    sign: (
      <Sign
        sign={SIGN.sign}
        inputValue={inputValue}
        saveInput={saveInput}
        confirm={confirm}
        signDisabled={signDisabled}
        signBtnColor={signBtnColor}
      />
    ),
    signIn: (
      <SignIn
        sign={SIGN.signIn}
        inputValue={inputValue}
        saveInput={saveInput}
        confirm={confirm}
        signDisabled={signDisabled}
        signBtnColor={signBtnColor}
        signIn={signIn}
      />
    ),
    signUp: (
      <SignUp
        sign={SIGN.signUp}
        inputValue={inputValue}
        saveInput={saveInput}
        checkBox={checkBox}
        checked={checked}
        goToSignUP={goToSignUP}
        signUpDisabled={signUpDisabled}
        signUpBtnColor={signUpBtnColor}
        signIn={signIn}
      />
    ),
    ss: <h1>ss</h1>,
  };

  return (
    <div className="modal">
      <div className="iconPositon">
        <form method="get">
          <div className="modalTop">
            <h2 className="modalTitle">안녕하세요.</h2>
            <div className="modalSub">
              로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다.
            </div>
          </div>
          {signMode === 'sign'
            ? showSign.sign
            : signMode === 'signIn'
            ? showSign.signIn
            : showSign.signUp}
        </form>
        <i className="fi fi-br-cross" />
      </div>
    </div>
  );
};

export default Login;

const SIGN = {
  sign: [{ text: '이메일 주소', name: 'email' }],
  signIn: [
    { text: '이메일 주소', name: 'email' },
    { text: '패스워드', name: 'password' },
  ],
  signUp: [
    { text: '이메일 주소', name: 'email' },
    { text: '패스워드', name: 'password' },
    { text: '패스워드 확인', name: 'passwordConfirm' },
  ],
};
