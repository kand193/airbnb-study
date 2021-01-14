import React from 'react';
import styled from 'styled-components';

class HeaderInput extends React.Component {
  render() {    
    return (
      <Wrapper width={this.props.width} onClick={this.props.onClick}>
        <NameComp>{this.props.name}</NameComp>
        <DescComp>{this.props.children}</DescComp>
      </Wrapper>
    )
  }
};

export default HeaderInput;

const Wrapper = styled.div`
  ${(props) => props.width ? `width: ${props.width};` : 'flex: 1;'}
  padding: 14px 32px;
  border-radius: 32px;
  text-align: left;
  font-size: 12px;
  font-weight: 800;

  &:hover {
    background-color: #EBEBEB;
  }
`;

const NameComp = styled.div`
  font-size: 12px;
  font-weight: 800;
`; 

const DescComp = styled.div`
  font-size: 14px;
  color: #717171;
  font-weight: 400;
`;