import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import Date from "../../date/Date";
import styled from "styled-components";
import GGBET from "../../images/gg-bet-logo.png";
import Group from "../../images/group.png";
import Header from "../../Header/index";

const DataName = styled.p`
    @media screen and (max-width: 750px) {
        text-transform: uppercase;
    }    
    
    @media screen and (min-width: 751px) {
        text-transform: uppercase;
        font-weight: 500;
    }
`

const Time = styled.div`
    @media screen and (max-width: 750px) {
        box-sizing: border-box;
        width:  20%;
        text-align:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        margin-left: 3%;
    }  
    
    @media screen and (min-width: 751px) {
        box-sizing: border-box;
        width:  25%;
        text-align:center;
        display:flex;
        flex-direction:row;
        align-items:center;
        gap:10px;
        margin-left: 3%;
    }
`

const DataRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    align-items:center;
    gap:2px;
    padding:7px;
    background-color: #252525;
    margin:5px 0px;
    font-size:9px;
    font-weight: 300;
    height: 190px;

    @media screen and (min-width: 751px) {
        height: 100px;
    }
    `

const MatchType = styled.p`
    @media screen and (max-width: 750px) {
        margin:0px;
        font-size:16px;
        font-weigth:400;
        text-transform: uppercase; 
}   
    @media screen and (min-width: 751px) {
        margin:0px;
        font-size:18px;
        font-weigth:400;
        text-transform: uppercase; 
        min-width: 100px;
    }
`

const CompContainer = styled.div`
    @media screen and (max-width: 750px) {
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        gap:12px;
        justify-content:center;
        align-items:center;
        width:55%;
        max-height: 100%;
    }

    @media screen and (min-width: 751px) {
        box-sizing: border-box;
        display:flex;
        flex-direction: row;
        gap:12px;
        justify-content:center;
        align-items:center;
        width:60%;
        max-height: 100%;

        & > :nth-child(3) {
            display: flex;
            flex-direction: row-reverse;
        }
    }
`

const CompDiv = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    align-items:center;
    width:70px;
    
    @media screen and (min-width: 751px) {
        margin: 0 10px;
        gap:12px;
        width: 140px;
    }
`

const CompLogo = styled.img`

    @media screen and (max-width: 750px) {
        width:30px;
        height:30px;
    }
    
    @media screen and (min-width: 751px) {
        width: 25%;
        height: 25%;
    }
    `

const CompName = styled.div`
    width:60px;
    text-align:center;
    font-size: 10px;
    text-transform: uppercase;

    @media screen and (min-width: 751px) {
        width: 100%;
        font-size: 12px;
    }
`

const Against = styled.img`
    height: 11px;
    margin: 0px 3px;
`

const OperatorDiv = styled.div`
    @media screen and (max-width: 750px) {
        box-sizing: border-box;
        width:25%; // Setting both width and height
        display: flex; 
        justify-content: center;
        padding: 0px;
        border-radius: 50%; // This ensures a perfect circle
    }

    @media screen and (min-width: 751px) {
        box-sizing: border-box;
        width:15%; // Setting both width and height
        display: flex; 
        justify-content: center;
        padding: 0px;
        border-radius: 50%; // This ensures a perfect circle
    }
`

const OperatorLogo = styled.img`
    width: 100%; // Or maybe 100% if you want it to fill its parent
    align-items: center;
    border-radius: 0px; // Optional, if you want the image itself to be circular

    @media screen and (min-width: 751px) {
        width: 55%;
    }
`

const OddsContainer = styled.div`
    display:flex;
    gap:10px; 
    align-items:center;
    `
    
const Odd = styled.div`
    border:1px solid red;
    border-radius:15px;
    padding: 5px 10px;

    @media screen and (min-width: 751px) {
        font-size: 12px;
        border:1px solid red;
        border-radius:15px;
        padding: 5px 10px;
    }
`

function OddsApi(){

    const [externalData, setExternalData] = useState([])

    useEffect(() =>{
        fetchOdds()
    },[])

    async function fetchOdds(){
        const response = await getExternalMatchesData()
        setExternalData(response.Sport.eSports.Events)
    }

    console.log(externalData)

    return(
        <div>
            <Header />
            {externalData.map(data =>(
                <div>
                    <div>
                      <DataName>{data.Name}</DataName>
                    </div>
                    <div>
                    {data.Matches.map(match => (
                        <DataRow>
                            <Time>
                                <MatchType>
                                    {match.MatchType}
                                </MatchType>
                                <Date timestamp={match.StartDate}></Date>
                            </Time>
                            <CompContainer>
                                <OddsContainer>
                                    <CompDiv>
                                        <CompLogo
                                            src={`https://${match.Competitors[0].Logo}`}
                                            alt="Logo Competidor"
                                            onError={(e) => {
                                                e.target.src = GGBET;
                                            }}
                                        />
                                        <CompName>
                                            {match.Competitors[0].Name}
                                        </CompName>
                                    </CompDiv>
                                    <Odd>
                                        {match.Bets[0].Odds[0].Value}
                                    </Odd>
                                </OddsContainer>
                                <Against src={Group} />
                                <OddsContainer>
                                    <CompDiv>
                                        <CompLogo
                                            src={`https://${match.Competitors[1].Logo}`}
                                            alt="Logo Competidor"
                                            onError={(e) => {
                                                e.target.src = GGBET;
                                            }}
                                        />
                                        <CompName>
                                            {match.Competitors[1].Name}
                                        </CompName>
                                    </CompDiv>
                                <Odd>
                                        {match.Bets[0].Odds[1].Value}
                                    </Odd>
                                </OddsContainer>
                            </CompContainer>
                            <OperatorDiv>
                                <OperatorLogo src={GGBET}  alt="gg=bet-logo"/>
                            </OperatorDiv>
                        </DataRow>
                    ))}

                    </div>
                </div>
            ))}
        </div>
    )
}


export default OddsApi;