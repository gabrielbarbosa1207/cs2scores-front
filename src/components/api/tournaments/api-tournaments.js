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
    margin: 0px 0px 4px 0px;
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
            {externalData.map((data, dataIndex) => (
                <div key={dataIndex}>
                    {data.Matches.map((match, matchIndex) => (
                        <BothContainers key={matchIndex}>
                            <TournamentsContainer id={`TournamentsContainer-${dataIndex}-${matchIndex}`}>
                                <MatchType>
                                    {match.MatchType}
                                </MatchType>
                                <InfoTournaments>
                                    <DataName>{data.Name}</DataName>
                                    <TournamentDate timestamp={match.StartDate} />
                                </InfoTournaments>
                                <ContainerArrow>
                                    <Arrow
                                        className='arrow'
                                        id={`arrow-${dataIndex}-${matchIndex}`}
                                        src={SetaBaixo}
                                        alt="seta para baixo"
                                        onClick={() => {
                                            const Expandable = document.getElementById(`expandable-${dataIndex}-${matchIndex}`);
                                            const TournamentsContainer = document.getElementById(`TournamentsContainer-${dataIndex}-${matchIndex}`);
                                            if (Expandable.style.display === '' || Expandable.style.display === 'none') {
                                                Expandable.style.display = 'flex';
                                                document.getElementById(`arrow-${dataIndex}-${matchIndex}`).style.transform = 'rotate(180deg)';
                                                document.getElementById(`arrow-${dataIndex}-${matchIndex}`).style.transition = 'transform .3s';
                                                TournamentsContainer.style.marginBottom = '0px';
                                            } else {
                                                Expandable.style.display = 'none';
                                                document.getElementById(`arrow-${dataIndex}-${matchIndex}`).style.transform = 'rotate(360deg)';
                                                document.getElementById(`arrow-${dataIndex}-${matchIndex}`).style.transition = 'transform .3s';
                                            }
                                        }}
                                    />
                                </ContainerArrow>
                            </TournamentsContainer>
                            <ExpandableContainer id={`expandable-${dataIndex}-${matchIndex}`} className="expandable">



                            </ExpandableContainer>
                        </BothContainers>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default TournamentsApi;