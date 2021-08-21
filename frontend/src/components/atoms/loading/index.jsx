import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from './style.js';

const Loading = ({ tagLoading, goodReadsLoading }) => {
    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));
    const classes = useStyles();

    return (
        <Container>
            <Backdrop className={classes.backdrop} open={tagLoading || goodReadsLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    )
}

export default Loading;

Loading.propTypes = {
    goodReadsLoading: PropTypes.bool.isRequired,
    tagLoading: PropTypes.bool.isRequired
};
