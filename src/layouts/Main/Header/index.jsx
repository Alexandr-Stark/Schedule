// Absolute imports
import React from 'react';

// Helpers
import { getWeekNumber } from 'helpers/schedule';

// Constants
import { GROUPS } from 'constants/schedule';  

// Styles
import { Wrapper, GroupsContainer, GroupLink } from './styled';

const Header = () => {
  return (
    <Wrapper>
      <GroupsContainer>
        {Object.values(GROUPS)
          .map(({ name }) => (
          <li key={name}>
            <GroupLink to={`/schedule/${name}/weeks/${getWeekNumber()}`}>{name}</GroupLink>
          </li>
          ))}
      </GroupsContainer>
    </Wrapper>
  );
};
export default Header;