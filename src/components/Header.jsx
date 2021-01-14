import React from 'react';
import styled from 'styled-components';

import HeaderInput from './HeaderInput';
import PeopleModal from './PeopleModal';

class Header extends React.Component {
  state = {
    isVisiblePeopleModal: false,
  }

  handlePeopleClick = () => {
    this.setState({
      isVisiblePeopleModal: !this.state.isVisiblePeopleModal,
    })
  }

  render() {
    return (
      <Wrapper>
        <HeaderInput name="위치" onClick={() => {}} width="270px">
          <StyledInput placeholder="어디로 여행가세요?" />
        </HeaderInput>
        <Divider />
        <HeaderInput name="체크인" onClick={() => {}}>
          날짜 추가
        </HeaderInput>
        <Divider />
        <HeaderInput name="체크아웃" onClick={() => {}}>
          날짜 추가
        </HeaderInput>
        <Divider />
        <HeaderInput name="인원" onClick={this.handlePeopleClick}>
          게스트 추가
        </HeaderInput>
        {this.state.isVisiblePeopleModal && <PeopleModal />}
      </Wrapper>
    )
  }
}

export default Header;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 850px;
  height: 66px;
  background-color: white;
  border-radius: 32px;
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: #DDDDDD;
`;