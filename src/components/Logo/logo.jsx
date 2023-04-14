import PropTypes from "prop-types";

import BlackLogo from "../../assets/brand_assets/black.png";
import WhiteLogo from "../../assets/brand_assets/white.png";

const Logo = ({ color = "white", className = '' }) => {
  return (
    <img
      src={color === "white" ? WhiteLogo : BlackLogo}
      alt="Truth Outreach Church Center"
      className={className}
    />
  );
};

Logo.propTypes = {
  color: PropTypes.oneOf(["white", "black"]),
  className: PropTypes.string,
};

export default Logo;
