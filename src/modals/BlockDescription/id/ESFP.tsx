import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Программа уменьшения ощущения дискомфорта и создания комфорта вообще.
            </Text>

            <Text tag="p">
                Она реализуется посредством создания конкретного позитивного состояния (эмоций, переживаний) для себя и близких людей.
            </Text>

            <Text tag="p">
                Неосознанно создает в узком кругу атмосферу хорошего настроения.
            </Text>
        </>
    );
}