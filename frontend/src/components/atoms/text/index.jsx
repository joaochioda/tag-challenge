import React from 'react';
import PropTypes from "prop-types";
import { Container } from './style.js';

const Text = ({ text }) => {
    return (
        <Container>
            <span>{text}</span>
        </Container>)
}

export default Text;

Text.propTypes = {
    text: PropTypes.string.isRequired,
};
