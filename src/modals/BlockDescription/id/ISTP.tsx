import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Имеет выработанную жизненным опытом личную стратегию защиты собственных интересов и интересов ближнего окружения.
            </Text>

            <Text tag="p">
                Гибко и эффективно использует существующие системы и правила, в своей повседневной деятельности, в том числе для защиты своих интересов.
            </Text>
        </>
    );
}
