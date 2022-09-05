import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Комфорт и удобство понимает на основании усвоенных норм и стереотипов. Не всегда в состоянии создать себе удобную рабочую или домашнюю обстановку.
            </Text>
            
            <Text tag="p">
                В эмоциональных состояниях ориентируется только на основании собственного опыта.
            </Text>

            <Text tag="p">
                Часто неадекватен в проявлениях эмоций.
            </Text>

            <Text tag="p">
                Оценки его эмоционального состояния со стороны могут быть ему неприятны.
            </Text>
        </>
    );
}
