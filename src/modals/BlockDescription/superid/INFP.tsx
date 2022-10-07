import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Привлекает информация о силовой стороне жизни, а особенно конкретные приемы защиты своего жизненного пространства, своих интересов.
            </Text>

            <Text tag="p">
                Чувствует нехватку навыков и информации по способам защиты и проявления влияния.
            </Text>

            <Text tag="p">
                Претендует на должную оценку своей способности к анализу, умению обобщенно мыслить. Нуждается в оценке этого умения.
            </Text>

            <Text tag="p">
                Неосознанно активизируется при необходимости задействовать аналитические, логические способности, особенно если это ведет к укреплению его влияния.
            </Text>
        </>
    );
}