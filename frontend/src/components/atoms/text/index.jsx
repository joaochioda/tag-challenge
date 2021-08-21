import React from 'react';
import PropTypes from "prop-types";
import { Container } from './style.js';

const Text = ({ text, type = "span" }) => {
    return (
        <Container type={type}>
            {text}
        </Container>)
}

export default Text;

Text.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
};
