import Input from './Input/Input';

const SignIn = ({
  sign,
  inputValue,
  saveInput,
  confirm,
  signDisabled,
  signBtnColor,
  signIn,
}) => {
  return (
    <>
      <Input sign={sign} inputValue={inputValue} saveInput={saveInput} />
      <button
        className="btn"
        onClick={confirm}
        disabled={!signDisabled}
        style={{ backgroundColor: signBtnColor }}
      >
        <span> 계속</span>
      </button>
      <p className="under" onClick={signIn}>
        회원이 아니십니까?
      </p>
    </>
  );
};

export default SignIn;
