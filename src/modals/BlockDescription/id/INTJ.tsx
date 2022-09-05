import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Имеет выработанные жизнью установки и методы, касающиеся конкретной практической активности, технологичности, использования ресурсов.
            </Text>

            <Text tag="p">
                Спонтанно чувствует правильное распределение ресурсов во времени, позволяющее эффективно решать текущие задачи.
            </Text>
        </>
    );
}
