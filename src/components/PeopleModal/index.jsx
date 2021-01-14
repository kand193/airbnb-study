import React from 'react';
import styled from 'styled-components';
import Count from './Count';

class PeopleModal extends React.Component {
  render() {
    return (
      <Wrapper>
        <Count name="성인" description="만 13세 이상" />
        <Count name="어린이" description="2~12세" />
        <Count name="유아" description="2세 미만" />
      </Wrapper>
    )
  }
}

export default PeopleModal;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
  width: 395px;
  padding: 16px 32px;
  text-align: left;
  background-color: white;
  border-radius: 32px;
`;