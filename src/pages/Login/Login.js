import { useState } from 'react';
import Input from './Input/Input';
import './Login.scss';

const Login = () => {
  const [signMode, setSignMode] = useState('sign');
  const [inputValue, setInputValue] = useState({
    '이메일 주소': '',
    패스워드: '',
    '패스워드 확인': '',
    성: '',
    이름: '',
  });

  const [checkBox, setCheckBox] = useState({ first: false, second: false });

  const signDisabled =
    inputValue['이메일 주소'].includes('@') &&
    inputValue['이메일 주소'].includes('.com') &&
    inputValue['이메일 주소'].length >= 5;

  const signUpDisabled =
    signDisabled &&
    inputValue['패스워드'].length >= 8 &&
    inputValue['성'].length >= 1 &&
    inputValue['이름'].length >= 1;

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
        email: inputValue['이메일 주소'],
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw alert('통신 에러 발생! api주소와 헤더 바디를 일치시키세요');
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
    if (inputValue['패스워드'] === inputValue['패스워드 확인']) {
      if (checkBox.first === true && checkBox.second === true) {
        fetch('./data/data.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: inputValue['이메일 주소'],
            password: inputValue['패스워드'],
            firstName: inputValue['성'],
            lastName: inputValue['이름'],
          }),
        });
      } else {
        alert('약관 동의가 필요합니다.');
      }
    } else {
      alert('패스워드가 일치하지 않습니다.');
    }
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
          {signMode === 'sign' ? (
            <>
              <Input
                sign={SIGN.sign}
                inputValue={inputValue}
                saveInput={saveInput}
              />
              <button
                className="btn"
                onClick={confirm}
                disabled={!signDisabled}
                style={{ backgroundColor: signBtnColor }}
              >
                <span> 계속</span>
              </button>
            </>
          ) : signMode === 'signIn' ? (
            <>
              <Input
                sign={SIGN.signIn}
                inputValue={inputValue}
                saveInput={saveInput}
              />
              <button
                className="btn"
                onClick={confirm}
                disabled={!signDisabled}
                style={{ backgroundColor: signBtnColor }}
              >
                <span> 계속</span>
              </button>
              <p onClick={signIn}>회원이 아니십니까?</p>
            </>
          ) : (
            <>
              <Input
                sign={SIGN.signUp}
                inputValue={inputValue}
                saveInput={saveInput}
              />
              <div className="nameInput">
                <input
                  placeholder="성"
                  name="성"
                  value={inputValue['성']}
                  onChange={saveInput}
                />
                <input
                  placeholder="이름"
                  name="이름"
                  value={inputValue['이름']}
                  onChange={saveInput}
                />
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="first"
                  checked={checkBox.first}
                  onChange={checked}
                />
                <p>가입자 본인은 만 14세 이상입니다.</p>
              </div>
              <div className="check-box">
                <input
                  type="checkbox"
                  name="second"
                  checked={checkBox.second}
                  onChange={checked}
                />
                <p className="terms">이용 약관에 동의합니다.</p>
              </div>
              <button
                className="btn"
                onClick={goToSignUP}
                disabled={!signUpDisabled}
                style={{ backgroundColor: signUpBtnColor }}
              >
                <span> 등록</span>
              </button>
              <p onClick={signIn}>이솝 계정을 가지고 계십니까?</p>
            </>
          )}
        </form>
        <i className="fi fi-br-cross" />
      </div>
    </div>
  );
};

export default Login;

const SIGN = {
  sign: ['이메일 주소'],
  signIn: ['이메일 주소', '패스워드'],
  signUp: ['이메일 주소', '패스워드', '패스워드 확인'],
};
