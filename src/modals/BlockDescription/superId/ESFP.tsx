import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Привлекает информация о каких-либо событиях, изменениях, о том, как избежать крупных неблагоприятных событий, повторения ошибок прошлого, об общей перспективе и историческом опыте.
            </Text>

            <Text tag="p">
                Хотел бы считать,что умеет качественно работать над конкретными объектами. Нуждается в позитивной оценке этого умения.
            </Text>

            <Text tag="p">
                Неосознанно активизируется при необходимости избежать любых неблагоприятных событий посредством конкретной эффективной работы.
            </Text>
        </>
    );
}
           