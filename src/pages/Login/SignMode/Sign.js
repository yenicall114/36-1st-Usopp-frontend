import Input from './Input/Input';

const Sign = ({
  sign,
  inputValue,
  saveInput,
  confirm,
  signDisabled,
  signBtnColor,
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
    </>
  );
};

export default Sign;
