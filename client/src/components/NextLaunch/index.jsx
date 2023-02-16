import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import {StyledBox} from './styles'

export const NextLaunch = ({nextLaunch}) => (
  <StyledBox >
    <CardContent>
      <Typography variant="h5" component="div">
        Next Launch
      </Typography>
      {nextLaunch && (
      <>
      <Typography component="div">
        {`Name: ${nextLaunch.name}`}
      </Typography>
      <Typography component="div">
        {`Date: ${nextLaunch.date}`}
      </Typography>
      <Typography component="div">
        {`Flight Number: ${nextLaunch.flightNumber}`}
      </Typography>
      <Typography component="div">
        {`Description: ${nextLaunch.details || '--'}`}
      </Typography>
      </>
      )}
    </CardContent>
  </StyledBox>
)