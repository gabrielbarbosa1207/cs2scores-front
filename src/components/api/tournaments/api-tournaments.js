import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import TournamentDate from "../../date/TournamentDate";
import styled, { css } from "styled-components";
import SetaBaixo from "../../images/SetaBaixo.svg";

const BothContainers = styled.div`
    display: flex;
    flex-direction: column;
`

const StandardStyleContainers = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75px;
    overflow-X: hidden;
    margin: 4px 0;
    background-Color: #252525;
`

const TournamentsContainer = styled.div`
    ${StandardStyleContainers}
`

const MatchType = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoTournaments = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    row-gap: 4px;
`

const DataName = styled.div`
    text-align: center;
`

const ContainerArrow = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`
    
const Arrow = styled.img`
    align-text: center;

`

const ExpandableContainer = styled.div`
    ${StandardStyleContainers}
    margin: 0px;
    display: none;
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
                        <BothContainers>
                            <TournamentsContainer>
                                <MatchType>
                                    {match.MatchType}
                                </MatchType>
                                <InfoTournaments>
                                    <DataName>{data.Name}</DataName>
                                    <TournamentDate timestamp={match.StartDate} />
                                </InfoTournaments>
                                <ContainerArrow>
                                    <Arrow id='arrow' src={SetaBaixo} alt="seta para baixo" onClick={() => {
                                        const Expandables = document.querySelectorAll('#expandable');
                                        Expandables.forEach(Expandable => {
                                        if (Expandable.style.display === '' || Expandable.style.display === 'none') {
                                            Expandable.style.display = 'flex';
                                            document.getElementById('arrow').style.transform = 'rotate(180deg)';
                                            document.getElementById('arrow').style.transition = 'transform .3s'; 
                                        }
                                        else {
                                            Expandable.style.display = 'none';
                                            document.getElementById('arrow').style.transform = 'rotate(360deg)';
                                            document.getElementById('arrow').style.transition = 'transform .3s'; 
                                        }
                                    })}}/>
                                </ContainerArrow>
                            </TournamentsContainer>
                            <ExpandableContainer id="expandable">



                            </ExpandableContainer>
                        </BothContainers>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TournamentsApi;