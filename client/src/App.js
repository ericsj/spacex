import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import './App.css';
import { ContentWrapper, PastLaunches, UpcomingLaunches, LastLaunch, NextLaunch} from './components'
import { useFetchPastLaunches, useFetchUpcomingLaunches } from './hooks';
import { theme } from './theme';

function App() {
  const [upcomingLaunches, setUpcomingLaunches] = useState()
  const [pastLaunches, setPastLaunches] = useState()
  const fetchUpcomingLaunches = useFetchUpcomingLaunches(setUpcomingLaunches)
  const fetchPastLaunches = useFetchPastLaunches(setPastLaunches)
  useEffect(() => fetchPastLaunches, [fetchPastLaunches])
  useEffect(() => fetchUpcomingLaunches, [fetchUpcomingLaunches])

  return (
    <ThemeProvider theme={theme}>
      <ContentWrapper>
        <LastLaunch lastLaunch={pastLaunches?.[0]}/>
        <NextLaunch nextLaunch={upcomingLaunches?.[0]}/>
        <PastLaunches pastLaunches={pastLaunches}/>
        <UpcomingLaunches upcomingLaunches={upcomingLaunches}/>
      </ContentWrapper>
    </ThemeProvider>
  );
}

export default App;
