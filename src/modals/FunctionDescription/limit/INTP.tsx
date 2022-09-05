import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не любит много рассуждать о гипотетических идеях. Может сообщать пессимистичные прогнозы по различным поводам.
            </Text>

            <Text tag="p">
                При том, что часто очень эрудированны, им сложно придумать новые идеи, гораздо проще дорабатывать уже существующие.
            </Text>
            
            <hr />
        </>
    );
}

