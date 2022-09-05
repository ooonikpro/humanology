import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Чувствует некоторую неуверенность в своей способности отстоять себя, защитить свои интересы.
            </Text>

            <Text tag="p" >
                Привлекает всевозможная информация о способах получения прибыли, выгоды, о материальных ресурсах.
            </Text>

            <Text tag="p">
                Хотел бы считать, что умеет строить хорошие отношения, быть тактичным и приятным в общении. Нуждается в положительной оценке этого умения.
            </Text>
        </>
    );
}
