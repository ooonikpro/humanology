import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Испытывает затруднения в создании нужной эмоциональной атмосферы.
            </Text>

            <Text tag="p">
                Привлекает возможность уйти от отрицательных состояний, приобрести энтузиазм и воодушевление.
            </Text>

            <Text tag="p">
                Активизирует положительная перспектива, чувство причастности к весомым событиям.
            </Text>
        </>
    );
}

