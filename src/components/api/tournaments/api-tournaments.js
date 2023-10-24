import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import TournamentDate from "../../date/TournamentDate";
import styled, { css } from "styled-components";
import SetaBaixo from "../../images/SetaBaixo.svg";
import Header from "../../Header";

const BothContainers = styled.div`
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
}
    @media screen and (min-width: 751px) {
        display: flex;
        flex-direction: row;
    }
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

const MatchTypeContainer = styled.div`
    @media screen and (max-width: 750px) {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
    }

    @media screen and (min-width: 751px) {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    `
    
    const MatchType = styled.div`
        @media screen and (max-width: 750px) {
            background-Color: #22611D;
            color: #13FF00;
            font-size: 15px;
            font-weight: 300;
            line-height: 13.7px;
            border-radius: 11px;
            height: 40%;
            min-width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media screen and (min-width: 751px) {
            background-Color: #22611D;
            color: #13FF00;
            font-size: 15px;
            font-weight: 300;
            line-height: 13.7px;
            border-radius: 11px;
            height: 40%;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
`

const InfoTournaments = styled.div`
    @media screen and (max-width: 750px) {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        row-gap: 4px;
}
    @media screen and (min-width: 751px) {
        box-sizing: border-box;
        display:flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        width: 80%;
        padding-right: 5%;
    }    
`

const DataName = styled.div`
    @media screen and (max-width: 750px) {
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        max-width: 80%;
    }
    @media screen and (min-width: 751px) {
        text-align: center;
        width: 50%;
        font-family: 'Roboto';
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
    }
`

const ContainerArrow = styled.div`
    @media screen and (max-width: 750px) {    
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
}
    @media screen and (min-width: 751px) {
        display: none;
    }
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
            <Header />
            {externalData.map((data, dataIndex) => (
                <div key={dataIndex}>
                    {data.Matches.map((match, matchIndex) => (
                        <BothContainers key={matchIndex}>
                            <TournamentsContainer id={`TournamentsContainer-${dataIndex}-${matchIndex}`}>
                                <MatchTypeContainer>
                                    <MatchType>
                                        {match.MatchType}
                                    </MatchType>
                                </MatchTypeContainer>
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
                                                TournamentsContainer.style.marginBottom = '4px';
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