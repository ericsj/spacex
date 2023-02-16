import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import {StyledBox} from './styles'

export const LastLaunch = ({lastLaunch}) => (
  <StyledBox >
    <CardContent>
      <Typography variant="h5" component="div">
        Last Launch
      </Typography>
      {lastLaunch && (
      <>
      <Typography component="div">
        {`Name: ${lastLaunch.name}`}
      </Typography>
      <Typography component="div">
        {`Date: ${lastLaunch.date}`}
      </Typography>
      <Typography component="div">
        {`Success: ${lastLaunch.success ? 'Yes' : 'No'}`}
      </Typography>
      <Typography component="div">
        {`Description: ${lastLaunch.details || '--'}`}
      </Typography>
      </>
      )}
    </CardContent>
  </StyledBox>
)