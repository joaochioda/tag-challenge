import React from 'react';
import PropTypes from "prop-types";
import { Container } from './style.js';
const Image = ({ src, alt, width = 64, height = 64 }) => {

    return (
        <Container>
            <img src={src} alt={alt} height={height} width={width} />
        </Container>)
}

export default Image;

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};
