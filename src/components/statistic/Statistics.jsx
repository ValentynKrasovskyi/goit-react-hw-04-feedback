import React from 'react';
import PropTypes from 'prop-types';
import { StatisticStyle } from './statistics.styled';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <StatisticStyle.TitleStyle>Statistics</StatisticStyle.TitleStyle>
      <StatisticStyle.TextStyle>Good: {good}</StatisticStyle.TextStyle>
      <StatisticStyle.TextStyle>Neutral: {neutral}</StatisticStyle.TextStyle>
      <StatisticStyle.TextStyle>Bad: {bad}</StatisticStyle.TextStyle>
      <StatisticStyle.TextStyle>Total: {total}</StatisticStyle.TextStyle>
      <StatisticStyle.TextStyle>
        Positive feedback: {positivePercentage}%
      </StatisticStyle.TextStyle>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};