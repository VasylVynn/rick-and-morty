import React from 'react';
import {Typography, Link } from '@mui/material';
import Species from './category/Species';
import Status from './category/Status';
import Gender from './category/Gender';
import {makeStyles} from '@mui/styles';
import { Box } from '@mui/system';


const Filters = ({  updateStatus,  updateGender,  updateSpecies,   setPageNumber}) => {

    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        setPageNumber(1);
        window.location.reload(false);
      };

      const useStyles = makeStyles(theme => ({
        clearButton: {
            cursor: 'pointer',
        }
      }));
    const classes = useStyles();

      
    return (
        <Box
        sx={{p:'10px'}} >
            <Typography sx={{textAlign:'center'}} variant="h6">
            Filters
            </Typography>
            <Link sx={{ml: '130px'}}  onClick={clear} className={classes.clearButton}>Clear filters </Link>
            <Status updateStatus={updateStatus} setPageNumber={setPageNumber} />
            <Gender updateGender={updateGender} setPageNumber={setPageNumber} />
            <Species updateSpecies={updateSpecies} setPageNumber={setPageNumber} />
        </Box>


    )
}

export default Filters
