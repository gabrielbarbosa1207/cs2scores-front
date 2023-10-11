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
`;

const TimeText = styled.span`
  color: white;
  font-weight: 600;
  display: block;
  font-size: 8px;
`;

const DateText = styled.span`
  color: white;
  font-weight: 400;  // lighter compared to the time
  display: block;
  font-size: 8px;  // making it smaller
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
