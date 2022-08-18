import './Input.scss';
const Input = ({ sign, inputValue, saveInput }) => {
  return (
    <>
      {sign.map((input, idx) => {
        const type = input.text.includes('패스워드') ? 'password' : 'text';
        return (
          <div className="emailInput" key={idx}>
            <input
              type={type}
              placeholder={input.text}
              name={input.name}
              value={inputValue.text}
              onChange={saveInput}
            />
          </div>
        );
      })}
    </>
  );
};

export default Input;
