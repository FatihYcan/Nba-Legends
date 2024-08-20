// Header.jsx

import nbaLogo from "../assets/nba-logo.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <Container className="p-3 rounded-4 header" >
      <Image className="logo" src={nbaLogo}></Image>
      <h1 className="mt-2 font-monospace display-4 fw-bold">NBA LEGENDS</h1>
    </Container>
  );
};

export default Header;
