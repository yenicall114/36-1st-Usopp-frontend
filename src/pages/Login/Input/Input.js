import './Input.scss';
const Input = ({ sign, inputValue, saveInput }) => {
  return (
    <>
      {sign.map((input, idx) => {
        if (input.includes('패스워드')) {
          return (
            <div className="emailInput" key={idx}>
              <input
                type="password"
                placeholder={input}
                name={input}
                value={inputValue.input}
                onChange={saveInput}
              />
            </div>
          );
        } else {
          return (
            <div className="emailInput" key={idx}>
              <input
                placeholder={input}
                name={input}
                value={inputValue.input}
                onChange={saveInput}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default Input;
