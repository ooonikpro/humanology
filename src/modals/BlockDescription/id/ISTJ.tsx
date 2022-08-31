import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Основываясь на выработанный жизненный опыт находит нужный инструмент для деятельности, в которой он задействован.
            </Text>

            <Text tag="p">
                Технологическая сторона процесса происходит автоматически и эффективно.
            </Text>

            <Text tag="p">
                Гибко использует индивидуальное умение организовать рабочее пространство, удобство, комфорт.
            </Text>
        </>
    );
}
