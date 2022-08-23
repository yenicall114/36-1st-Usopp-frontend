import './Input.scss';
const Input = ({ sign, inputValue, saveInput }) => {
  return (
    <>
      {sign.map(({ text, name }, idx) => {
        const type = text.includes('패스워드') ? 'password' : 'text';
        return (
          <div className="emailInput" key={idx}>
            <input
              type={type}
              placeholder={text}
              name={name}
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
