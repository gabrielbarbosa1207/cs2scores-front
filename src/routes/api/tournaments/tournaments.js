import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { getMatchesBySlug } from "../../../services/api/api";
import ReactMarkdown from 'react-markdown';
import TournamentsApi from "../../../components/api/tournaments/api-tournaments";

const GlobalStyle = createGlobalStyle`
html,body{
    margin: 0px;
    padding: 20px 8px 40px 8px;
    background-color:#1c1c1c;
    color:white;
    font-family: 'Roboto';
    background-Color: #2E2D30;
  }
`;

function TournamentsRoute() {
    const [internalAPI, setInternalApi] = useState([]);

    useEffect(() => {
        fetchTournaments()
    }, [])

    async function fetchTournaments() {
        const response = await getMatchesBySlug()
        setInternalApi(response)
    }

    console.log("Internal API", internalAPI)

    return (
        <div>
            <GlobalStyle />
            <div>
                <h1>
                    {/* { internalAPI.data.attributes.Title } */}
                </h1>
            </div>

            <TournamentsApi />
            
            <ReactMarkdown>
                {/* { internalAPI.data.attributes.Body } */}
            </ReactMarkdown>
        </div>
    );
}

export default TournamentsRoute;