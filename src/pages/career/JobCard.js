import React from 'react';
import {Box, Grid, Typography, Button, ThemeProvider} from '@material-ui/core';
import styled from 'styled-components';
import theme from "./theme/theme";
import { differenceInMinutes } from 'date-fns';

const StyledSection = styled.section`
  cursor: pointer;
    .typography{
      font-size: 18px;
      font-weight: 600;
    }
    .job-wrapper{
    border: 1px solid #e8e8e8;
    margin: 0 auto;
    width: 75%;
    padding: 30px;
    box-shadow: 0px 1px 3px rgba(0,0,0.1);
    border-radius: 5px;
    display:flex;
        &:hover {
          box-shadow: 0px 1px 5px rgba(0,0,0.1);
          border-left: 7px solid #4175D0;
          @include transition (all .6s);
        };
    };
    .skills-wrapper{
      font-size: 20px;
      margin: 8px;
      padding: 6px ;
      border-radius: 5px;
      transition: .3s;
      fontWeight: 600;
      background-color: #4175D0;
      color: #fff;
    };
    .button{
      font-size:12px;
      font-weight: bold;
      &:hover {
		      border: solid 2px #4175D0;
          background-color: darken(#4175D0, 30%);
		      @include transition (all .1s);
		  &:after {
			     width: 600px;
			     top: -180px;
			     height: 600px;
			     left: -40px;
		       @include transition (all .1s);
		};
    };



`;


export default (props) => {
  return (

  <StyledSection>
    <Box className="job-wrapper">
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography className="typography"> {props.title} </Typography>
        </Grid>
        <Grid item container xs>
          {props.skills.map( (skill) => (
            <Grid key={skill} className="skills-wrapper" item>
            {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs >
          <Grid item>
            <Typography className="typography">
             { differenceInMinutes(Date.now(), props.postedOn)} mins ago | {props.type} | {props.location}
             </Typography>
          </Grid>
          <Grid item>
          <Button variant="outlined" className="button" >See More ...</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </StyledSection>


  )
}
