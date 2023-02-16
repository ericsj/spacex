import { Typography } from '@mui/material';
import React from 'react'
import {PastLaunchesTable} from './components/PastLaunchesTable'
import { TableWrapper, Wrapper } from './styles'

export const PastLaunches = ({pastLaunches}) => {
  return(
    <Wrapper>
    <Typography variant='h5'>Past Launches</Typography>
    <TableWrapper>
    {pastLaunches && (<PastLaunchesTable pastLaunches={pastLaunches} />)}
    </TableWrapper>
    </Wrapper>
  )
}