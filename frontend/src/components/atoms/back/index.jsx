import React from 'react';
import PropTypes from "prop-types";
import { Container } from './style.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Back = ({ handleOnCLick }) => {
    return (
        <Container onClick={handleOnCLick}>
            <ArrowBackIcon fontSize="large" />
        </Container>)
}

export default Back;

Back.propTypes = {
    handleOnCLick: PropTypes.func.isRequired,
};
