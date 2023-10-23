import styled from "styled-components";
import GGBET from "../images/gg-bet-logo.png";
import Navbar from "./navbar/navbar";

const LogoHeader = styled.img`
    @media screen and (max-width: 750px) {
        width: 100vw;
    }
    
    @media screen and (min-width: 751px) {
        width: 100vw;

    }
`

function Header() {
    return (
        <div>
            <LogoHeader src={GGBET} alt="logo CS Header"/>
            <Navbar />
        </div>
    )
}

export default Header;