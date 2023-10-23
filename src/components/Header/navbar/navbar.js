import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
    font-size: 24px;
    background-Color: #252525;
    width: 75%;
    margin: 20px auto;
    border-radius: 20px;
    `

const NavBarItems = styled.div`
a {
    width: 33.3%;
    color: white;
    text-decoration: none;
}
`

const Navbar = () => {
    return (
        <NavBar>
            <NavBarItems className="tournaments">
                <Link to="/tournaments">Tournaments</Link>
            </NavBarItems>
            <NavBarItems className="matches">
                <Link to="/matches">Matches</Link>
            </NavBarItems>
            <NavBarItems className="odds">
                <Link to="/odds">Odds</Link>
            </NavBarItems>
        </NavBar>
    )
}

export default Navbar;