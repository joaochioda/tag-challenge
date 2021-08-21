import React from 'react';
import PropTypes from "prop-types";
import { Container, EmptyDiv } from './style.js';

import Image from '../../atoms/image';
import Text from '../../atoms/text';
import Star from '../../atoms/star';

const BookCard = ({ src, alt, textTag, rateTag, textGoodRead, rateGoodRead }) => {
    const height = 400;
    const width = 250;

    return (
        <EmptyDiv width={width} height={height}>
            <Container width={width} height={height}>
                <Image src={src} alt={alt} width={width} height={height} />
                <div className="verse" height={height} width={width}>
                    <Text text={textTag} />
                    <Star rate={rateTag} showValue />
                    <div className="padding" />
                    <Text text={textGoodRead} />
                    <Star rate={rateGoodRead} showValue />
                </div>
            </Container>
        </EmptyDiv>)
}

export default BookCard;

BookCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    textTag: PropTypes.string.isRequired,
    rateTag: PropTypes.number.isRequired,
    textGoodRead: PropTypes.string.isRequired,
    rateGoodRead: PropTypes.number.isRequired
};
