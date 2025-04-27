import Logo from "../assets/images/logo.png"; // Adjust path based on Title.js location

const Title = () => {
  return (
    <a href="/" aria-label="Home">
      <img
        className="logo-img"
        src={Logo}
        alt="FORSA Logo"
      />
    </a>
  );
};

export default Title;