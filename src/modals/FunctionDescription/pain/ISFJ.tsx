import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не любит ситуации неопределенности. Если ему начать рассказывать о своих идеях, то он запутается в вариантах и почувствует раздражение.
            </Text>

            <Text tag="p">
                Нагромождение любых идей способно вызвать ступор.
            </Text>

            <Text tag="p">
                Люди этого типа не любят хвастунов и выскочек, людей, которые выпячивают свои способности и свою уникальность.
            </Text>

            <hr />
        </>
    );
}
