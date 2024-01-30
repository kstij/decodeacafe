import {
  IconBrandDiscord,
  IconBrandLinkedin,
  
} from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__socials">
          <a href="https://www.linkedin.com/company/decodecafe-community">
            <IconBrandLinkedin className="footer-icon" />
          </a>
            <a href="https://discord.gg/sKnkyUejgV" target="_blank" rel="noopener noreferrer">
              <IconBrandDiscord className="footer-icon" />
            </a>
          </div>
          <div className="footer-content__text">
            <p>Privacy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
