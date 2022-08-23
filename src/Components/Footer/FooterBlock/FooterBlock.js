const FooterBlock = ({ data }) => {
  const { className, title, list } = data;

  return (
    <div className={className}>
      <h3>{title}</h3>
      <ul>
        {list.map((contents, idx) => (
          <li key={idx}>{contents}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;
