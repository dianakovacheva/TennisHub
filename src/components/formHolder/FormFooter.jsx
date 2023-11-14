import FormFooterCSS from "./FormFooter.module.css";

export default function FooterHomePage() {
  return (
    <footer className={FormFooterCSS.footer}>
      <div className={FormFooterCSS.developerInfo}>
        <span>
          Developed by Diana Kovacheva.&nbsp;Source code at&nbsp;
          <a href="https://github.com/dianakovacheva/TennisHub">
            <img
              className={FormFooterCSS.footerGithubMark}
              src="../../../public/images/github-mark.svg"
              alt="github-mark"
              width="20px"
              height="20px"
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
