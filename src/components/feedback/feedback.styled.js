import styled from 'styled-components'

const StyleBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyleButton = styled.button`
  background-color: SteelBlue;
  color: black;
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: Navy;
    color: white;
  }
`;

export const FeedbackStyle = {
    StyleBtnContainer,
    StyleButton

}