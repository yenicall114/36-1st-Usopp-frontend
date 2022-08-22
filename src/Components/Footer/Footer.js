import FooterBlock from './FooterBlock/FooterBlock';
import { FOOTER_DATA } from './FOOTER_DATA';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="email">
          <div className="inputBox">
            <input placeholder="이메일 주소" />
            <i className="fi fi-ss-arrow-right" />
          </div>
          <p>
            이솝 제품, 서비스, 스토어, 행사, 문화적 관심사 등 다양한 소식을
            받아볼 수 있도록 구독하세요.
          </p>
          <div className="checkBox">
            <input type="checkbox" />
            <span>본인의 만 14세 이상 여부를 확인해주세요.</span>
          </div>
        </div>
        {FOOTER_DATA.map((data, idx) => (
          <FooterBlock key={idx} data={data} />
        ))}
      </div>
      <div className="footerBottom">
        <spa>© Usopp</spa>
        <div />
      </div>
    </>
  );
};

export default Footer;
