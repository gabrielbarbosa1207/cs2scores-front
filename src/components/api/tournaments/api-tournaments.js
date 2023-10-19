import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import TournamentDate from "../../date/TournamentDate";
import styled from "styled-components";
import SetaBaixo from "../../images/SetaBaixo.svg";

const TournamentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-X: hidden;
`

const MatchType = styled.div`
    background-Color: green;
    width: 20%;
`

const InfoTournaments = styled.div`
    background-Color: grey;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
`

const DataName = styled.div`
    background-Color: black;
`

const ContainerArrow = styled.div`
    width: 10%
`

const Arrow = styled.img`
    margin: auto auto;
    width: 50%;
`


function TournamentsApi() {
    
    const [externalData, setExternalData] = useState([])

    useEffect(() => {
        fetchTournaments()
    }, [])

    async function fetchTournaments() {
        const response = await getExternalMatchesData()
        setExternalData(response.Sport.eSports.Events)
    }

    console.log(externalData)
    
    return (
        <div>
            {externalData.map(data => (
                <div>
                    {data.Matches.map(match => (
                        <TournamentsContainer>
                            <MatchType>
                                {match.MatchType}
                            </MatchType>
                            <InfoTournaments>
                                <DataName>{data.Name}</DataName>
                                <TournamentDate timestamp={match.StartDate} />
                            </InfoTournaments>
                            <ContainerArrow>
                                <Arrow src={SetaBaixo} alt="seta para baixo"/>
                            </ContainerArrow>
                        </TournamentsContainer>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TournamentsApi;