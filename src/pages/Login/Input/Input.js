import './Input.scss';
const Input = ({ sign, inputValue, saveInput }) => {
  return (
    <>
      {sign.map((input, idx) => (
        <div className="emailInput" key={idx}>
          <input
            placeholder={input}
            name={input}
            value={inputValue.input}
            onChange={saveInput}
          />
        </div>
      ))}
    </>
  );
};

export default Input;
