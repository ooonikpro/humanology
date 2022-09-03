import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не переносит формальную рутину, приводящую к простою в деловой деятельности.
            </Text>

            <Text tag="p">
                Не любит бумаги, бюрократию и все, что мешает ему быстро действовать.
            </Text>

            <hr />
        </>
    );
}

