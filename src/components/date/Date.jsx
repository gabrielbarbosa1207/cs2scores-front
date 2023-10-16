import React from 'react';
import moment from "moment"
import styled from "styled-components"

const DateWrapper = styled.div`
  text-align: left;
  width: 100%;  // To ensure the width fills its container
  display: flex;
  flex-direction: column;
  align-items: center; // Center children horizontally
  justify-content: center; // Center children vertically
  row-gap: 5px;

  @media screen and (min-width: 751px) {
    text-align: center;
  }
`;


const TimeText = styled.span`
  color: white;
  font-weight: 600;
  display: block;
  font-size: 12px;

  @media screen and (min-width: 751px) {
    font-size: 16px;
    font-weight: 400;
  }
  `;
  
  const DateText = styled.span`
  color: white;
  font-weight: 400;  // lighter compared to the time
  display: block;
  font-size: 12px;  // making it smaller
  
  @media screen and (min-width: 751px) {
    font-size: 16px;
    width:100px;
  }
  `;

function Date({ timestamp }) {
  const isToday = moment().isSame(moment(timestamp), 'day');

  return (
    <DateWrapper>
      <TimeText>{moment(timestamp).format("HH:mm")}</TimeText>  {/* 24-hour format */}
      {isToday ? (
        <DateText>Today</DateText>
      ) : (
        <DateText>{moment(timestamp).format("MMM, Do")}</DateText>
      )}
    </DateWrapper>
  );
}

export default Date;
