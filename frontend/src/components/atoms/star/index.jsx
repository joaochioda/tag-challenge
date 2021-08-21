import React from 'react';
import PropTypes from "prop-types";

import Rating from '@material-ui/lab/Rating';
import Text from '../text/index';

import { Container } from './style.js';

const Star = ({ rate, showValue }) => {
    return (
        <Container>
            <Rating
                name="hover-feedback"
                value={rate}
                precision={0.1}
                readOnly
            />
            {showValue && <Text text={rate.toFixed(2).toString()} />}
        </Container>
    )
}

export default Star;

Star.propTypes = {
    rate: PropTypes.number.isRequired,
    showValue: PropTypes.bool.isRequired
};
