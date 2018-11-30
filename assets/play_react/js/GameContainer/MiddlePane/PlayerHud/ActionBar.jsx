import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.div`
  display: inline-block;
  color: #444;
  border: 1px solid #6177c8;
  background: #879ade;
  box-shadow: 0 2px 5px 0px #000000;
  border-radius: 5px;
  cursor: pointer;
  vertical-align: middle;
  max-width: 35px;
  max-height: 35px;
  width: 35px;
  height: 35px;
  padding: 5px;
  text-align: center;
`;

const ActionBar = ({ characterSkills }) => (
  <FlexColumn>
    {' '}
    {characterSkills.map(skill => (
      <ActionButton key={skill.key}>{skill.name}</ActionButton>
    ))}
  </FlexColumn>
);

const mapStateToProps = state => {
  return {
    characterSkills: state.characterSkills
  };
};

export default connect(mapStateToProps)(ActionBar);