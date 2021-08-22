import React from 'react';
import PropTypes from "prop-types";

import Text from '../../atoms/text';
import Image from '../../atoms/image';

import { Container, RightSide } from './style.js';
import Back from '../../atoms/back';

const BookDetail = ({ name, url, edition, curator, pages, ratingsTag, ratingsGoodRead, handleOnCLick }) => {

    function normalizeData(edition) {
        if (!edition) return ''
        const editionData = edition.split(' ');
        return `${editionData[0]}/${editionData[2]}`
    }

    const textRateGoodRead = () => {
        if (!ratingsGoodRead) return `0 avaliações GoodRead`
        if (ratingsGoodRead > 0) return `${ratingsGoodRead.toString()} avaliações GoodRead`
    }

    return (
        <Container>
            <Back handleOnCLick={handleOnCLick} />
            <Image src={url} alt={name} width={400} height={500} />
            <RightSide>
                <Text text={name} type={'title'} />
                <Text text={normalizeData(edition)} type={'paragraph'} />
                <Text text={curator} type={'paragraph'} />
                <Text text={`${pages?.toString()} páginas`} type={'paragraph'} />
                <Text text={`${ratingsTag?.toString()} avaliações TAG`} type={'paragraph'} />
                <Text text={textRateGoodRead()} type={'paragraph'} />
            </RightSide>
        </Container>
    )
}

export default BookDetail;

BookDetail.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    edition: PropTypes.string,
    curator: PropTypes.string,
    pages: PropTypes.number,
    ratingsTag: PropTypes.number,
    ratingsGoodRead: PropTypes.number,
    handleOnCLick: PropTypes.func,
};
