import { FeedbackStyle } from './feedback.styled.js';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackStyle.StyleBtnContainer>
    <FeedbackStyle.StyleButton onClick={() => onLeaveFeedback('good')}>
      Good
    </FeedbackStyle.StyleButton>
    <FeedbackStyle.StyleButton onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </FeedbackStyle.StyleButton>
    <FeedbackStyle.StyleButton onClick={() => onLeaveFeedback('bad')}>
      Bad
    </FeedbackStyle.StyleButton>
  </FeedbackStyle.StyleBtnContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};