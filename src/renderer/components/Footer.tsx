import {
  VscGithubInverted,
  VscGitPullRequest,
  VscAccount,
} from 'react-icons/vsc';
import styled from 'styled-components';

const Box = styled.div`
  background: #1d2021;
  color: #fbf1c7;
  display: flex;
  justify-content: space-between;
  align-content; center; 
`;

export const Footer = ({ title, lang }) => {
  return (
    <Box className="px-2">
      <div className="left-section">
        <VscGithubInverted />
        {' Main'} <VscGitPullRequest /> 0
      </div>
      <div className="middle-section">{title}*</div>
      <div className="right-section">
        {lang} <VscAccount />
      </div>
    </Box>
  );
};
