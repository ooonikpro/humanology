import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Индивидуальная программа создания конкретных позитивных событий, положительных изменений. 
            </Text>


            <Text tag="p">
                Она реализуется посредством неосознанного создания подходящего состояния (эмоций, переживаний, настроения, чувств) как своего, так и окружающих.
            </Text>
        </>
    );
}
