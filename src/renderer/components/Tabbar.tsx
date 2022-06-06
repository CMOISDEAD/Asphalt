import styled from 'styled-components';
import { TabItem } from './Tab';

interface Tab {
  title: string;
}

interface Props {
  tabs: Array<Tab>;
}

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: auto;
  max-width: 97vw;
  max-height: 3vh;
  background: #1d2021;
`;

export const Tabbar = ({ tabs }: Props) => {
  return (
    <Box>
      {tabs.map((tab: Tab) => {
        return <TabItem title={tab.title} />;
      })}
    </Box>
  );
};
