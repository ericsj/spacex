import { Typography } from '@mui/material';
import React from 'react'
import {UpcomingLaunchesTable} from './components/UpcomingLaunches'
import { TableWrapper, Wrapper} from './styles'

export const UpcomingLaunches = ({upcomingLaunches}) => {
  return(
    <Wrapper>
      <Typography variant='h5'>Upcoming Launches</Typography>
      <TableWrapper>
      {upcomingLaunches && (<UpcomingLaunchesTable upcomingLaunches={upcomingLaunches} />)}
      </TableWrapper>
    </Wrapper>
  )
}
