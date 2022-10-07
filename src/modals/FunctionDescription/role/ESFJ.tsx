import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Нравится казаться деловым человеком, предприимчивым и хватким.
            </Text>

            <Text tag="p">
                Старается всегда быть в курсе всех течений бизнеса, понимать хоть немного в экономике и политике.
            </Text>

            <Text tag="p">
                Часто берут на себя больше, чем могут сделать, а затем страдают от этого.
            </Text>

            <Text tag="p">
                Нравится, когда в работе ему помогают, таким людям сложно работать в одиночку.
            </Text>

            <Text tag="p">
                Производят впечатление ловких и быстрых, деятельных людей.
            </Text>

            <Text tag="p">
                Чтобы он все сделал вовремя, его нужно ненавязчиво подталкивать.
            </Text>

        </>
    );
}

