import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { getMatchesBySlug } from "../../../services/api/api";
import ReactMarkdown from 'react-markdown';
import OddsApi from "../../../components/api/odds/api-odds";


const GlobalStyle = createGlobalStyle`
html,body{
    margin: 0px;
    padding: 20px 8px 40px 8px;
    background-color:#1c1c1c;
    color:white;
    font-family: 'Roboto', 'Inter', sans-serif;
  }
`;

// If the API is supposed to return more information, adapt this accordingly.


function OddsRoute() {
    const [internalAPI, setInternalApi] = useState([]);

    useEffect(() => {
        fetchOdds()
    }, [])

    async function fetchOdds(){
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
            
            <OddsApi />
            
            <ReactMarkdown>
                {/* { internalAPI.data.attributes.Body } */}
            </ReactMarkdown>
        </div>
    );
}

export default OddsRoute;
