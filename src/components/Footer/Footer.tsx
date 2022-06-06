import { AUTHOR_LINK } from "../../utils/constants";
import scss from "./footer.module.scss";
import FooterInfo from "./info/FooterInfo";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <p className={scss.copyright}>
        &copy;{" "}
        <a
          className={scss.link}
          href={AUTHOR_LINK}
          rel="noreferrer"
          target="_blank"
        >
          Ana Ts,
        </a>
        {` ${new Date().getFullYear()}`}
      </p>
      <FooterInfo />
    </footer>
  );
};

export default Footer;
