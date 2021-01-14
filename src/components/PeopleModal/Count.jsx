import React from 'react';
import styled from 'styled-components';

class Count extends React.Component {
  state = {
    cnt: 0,
  }

  handlePlusClick = () => {
    this.setState({
      cnt: this.state.cnt + 1,
    })
  }

  handleMinusClick = () => {
    if(this.state.cnt < 1) {
      return;
    }
    
    this.setState({
      cnt: this.state.cnt - 1,
    })
  }

  render() {
    return (
      <Wrapper>
        <div>
          <NameComp>
            {this.props.name}
          </NameComp>
          <DescComp>
            {this.props.description}
          </DescComp>
        </div>
        <div>
          <StyledButton onClick={this.handleMinusClick}>-</StyledButton>
          &nbsp;&nbsp;{this.state.cnt}&nbsp;&nbsp;
          <StyledButton onClick={this.handlePlusClick}>+</StyledButton>
        </div>
      </Wrapper>
    )
  }
}

export default Count;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const NameComp = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #222222;
`;

const DescComp = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #717171;
`;

const StyledButton = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 32px;
`;