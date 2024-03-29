import styled, { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <CountrySelector></CountrySelector>
      <h2 className="text-xl mb-2 font-semibold">Global Coronavirus Cases</h2>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
    </div>
  );
}
