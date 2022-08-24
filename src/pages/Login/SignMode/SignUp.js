import Input from './Input/Input';

const SignUp = ({
  sign,
  inputValue,
  saveInput,
  checkBox,
  checked,
  goToSignUP,
  signUpDisabled,
  signUpBtnColor,
  signIn,
}) => {
  return (
    <>
      <Input sign={sign} inputValue={inputValue} saveInput={saveInput} />
      <div className="nameInput">
        <input
          placeholder="성"
          name="firstName"
          value={inputValue.firstName}
          onChange={saveInput}
        />
        <input
          placeholder="이름"
          name="lastName"
          value={inputValue.lastName}
          onChange={saveInput}
        />
      </div>
      <div className="checkBox">
        <input
          type="checkbox"
          name="first"
          checked={checkBox.first}
          onChange={checked}
        />
        <span>가입자 본인은 만 14세 이상입니다.</span>
      </div>
      <div className="checkBox">
        <input
          type="checkbox"
          name="second"
          checked={checkBox.second}
          onChange={checked}
        />
        <span className="terms">이용 약관에 동의합니다.</span>
      </div>
      <button
        className="btn"
        onClick={goToSignUP}
        disabled={!signUpDisabled}
        style={{ backgroundColor: signUpBtnColor }}
      >
        <span> 등록</span>
      </button>
      <p className="under" onClick={signIn}>
        이솝 계정을 가지고 계십니까?
      </p>
    </>
  );
};

export default SignUp;
