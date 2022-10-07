import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Один из самых логичных типов. В голове у него всегда строятся системы, концепции, логические цепочки.
            </Text>

            <Text tag="p">
                Способен связать общее с частным, приблизить к реальности теоретическую концепцию, доказать сложные теоремы без подсказок.
            </Text>

            <Text tag="p">
                Всегда видит возможности каждой конкретной системы, отсекая при этом неинтересные и неперспективные варианты.
            </Text>

            <Text tag="p">
                Обладатель прекрасного аналитического ума и структурного мышления.
            </Text>

            <Text tag="p">
                Способен быть по-настоящему справедливым.
            </Text>

            <Text tag="p">
                Инфантилен.
            </Text>

        </>
    );
}
