import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В хорошем настроении способен быть оптимистом: если у него получается работа, он с энтузиазмом продолжает достигать цели
            </Text>

            <Text tag="p">
                Часто является поклонником быстрых видов спорта, любит побеждать, обожает азартные игры. Легко заключает пари «на слабо».
            </Text>

            <Text tag="p">
                В тяжелой ситуации, когда не видит выхода, нуждается в партнере, который объяснит, что выход есть всегда, нужно лишь посмотреть слегка под другим углом.
            </Text>

            <hr />
        </>
    );
}

