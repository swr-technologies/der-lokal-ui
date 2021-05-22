import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const AppContainer = styled.SafeAreaView`
  flex: 1;
  padding: ${StatusBar.currentHeight ? '32px' : 0} 0px
    ${({ theme }) => theme.size.padding1}px 0px;
  background-color: ${({ theme }) => theme.color.white};
`;

export default AppContainer;
