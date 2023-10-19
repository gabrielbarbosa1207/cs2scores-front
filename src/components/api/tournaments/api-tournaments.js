import React, { useState, useEffect, useCallback } from "react";
import { getExternalMatchesData } from "../../../services/api/api";
import Date from "../../date/Date";
import styled from "styled-components";

const DataName = styled.div`
    background-Color: black;
`

const MatchType = styled.div`
    background-Color: black;
`

const StartDate = styled.div`
    background-Color: black;
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
                    <DataName>{data.Name}</DataName>
                        <div>
                            {data.Matches.map(match => (
                                <><MatchType>
                                    {match.MatchType}
                                </MatchType><div>
                                        <StartDate>
                                            {match.StartDate}
                                        </StartDate>
                                    </div></>
                            ))}
                        </div>
                </div>
                ))}
        </div>
    )
}

export default TournamentsApi;