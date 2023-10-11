import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import Date from "../../date/Date";
import styled from "styled-components";
import GGBET from "../../images/gg-bet-logo.png";
import Group from "../../images/group.png";

const DataName = styled.p`
    text-transform: uppercase;
`

const Time = styled.div`
    width:  15%;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    margin: 0px 0px 0px 3%;
`

const DataRow = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    gap:2px;
    padding:7px 0px;
    background-color: #252525;
    margin:5px 0px;
    font-size:9px;
    font-weight: 300;
    height: 65px;
    `

const MatchType = styled.p`
    margin:0px;
    font-size:11px;
    font-weigth:400;
    text-transform: uppercase;
`

const CompContainer = styled.div`
    display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    width:70%;
`

const CompDiv = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    justify-content:center;
    align-items:center;
    width:70px;
`
const CompLogo = styled.img`
    width:30px;
    `

const CompName = styled.div`
    width:60px;
    text-align:center;
`
const Against = styled.img`
    height: 11px;
    margin: 0px 3px;
`

const OperatorDiv = styled.div`
    width:15%; // Setting both width and height
    display: flex; 
    justify-content: center;
    height: 30px;
    margin-right: 3%;
    padding: 0px;
    background-color: #3b3b3c;
    border-radius: 50%; // This ensures a perfect circle
`

const OperatorLogo = styled.img`
    width: auto; // Or maybe 100% if you want it to fill its parent
    align-items: center;
    object-fit: cover; // Ensures the image isn't stretched or compressed
    border-radius: 0px; // Optional, if you want the image itself to be circular
`

const OddsContainer = styled.div`
    display:flex;
    gap:7px; 
    align-items:center
    `
const Odd = styled.div`
    border:1px solid red;
    border-radius:15px;
    padding: 5px 10px;
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
                                        <CompLogo  src={`https://${match.Competitors[0].Logo}` } />
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
                                <Odd>
                                        {match.Bets[0].Odds[1].Value}
                                    </Odd>
                                <CompDiv>
                                    <CompLogo alt={GGBET} src={`https://${match.Competitors[1].Logo}`} />
                                    <CompName>
                                        {match.Competitors[1].Name}
                                    </CompName>
                                </CompDiv>
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