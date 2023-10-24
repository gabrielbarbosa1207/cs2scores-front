import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    margin: 23px auto;
    min-width: 75%;
    align-items: center;
    justify-content: center;
    background-color: #252525;
    border-radius: 16px;
    a {
        width: 100%;
        text-align: center;
        font-size: 16px;
        padding: 0;
        text-decoration: none;
        color: white;
    }
    `;
    
    const NavBarItems = styled.div`
        padding: 20px 0;
        background-color: ${({ selected }) => selected ? 'red' : 'inherit'};
        color: ${({ selected }) => selected ? 'white' : 'inherit'};
        border-radius: ${({ selected }) => selected ? '16px' : 'inherit'};

        & + & {
            padding: ${({ selected }) => selected ? '0' : '20px 0'};
        }
    `;

const NavbarContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(prevSelectedItem => prevSelectedItem === item ? null : item);
    }

    const generateNavBarItems = () => {
        return navItems.map((item, index) => (
            <Link to={`/${item.className}`}>
                <NavBarItems
                    key={index}
                    selected={selectedItem === item.className}
                    className={item.className + (selectedItem === item.className ? ' selected' : '')}
                    onClick={() => handleItemClick(item.className)}
                >
                    {item.text}
                </NavBarItems>
            </Link>
        ));
    }

    const navItems = [
        { className: 'tournaments', text: 'Tournaments' },
        { className: 'matches', text: 'Matches' },
        { className: 'odds', text: 'Odds' },
    ];

    return (
        <NavBar className="NavBar">
            {generateNavBarItems()}
        </NavBar>
    );
}

export default NavbarContainer;
