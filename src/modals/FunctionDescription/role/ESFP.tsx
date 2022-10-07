import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Хочет, чтобы его считали не таким как все, особенным, другим.
            </Text>

            <Text tag="p">
                Старается показать свою эрудированность, собирает информацию по различным темам, чтобы поддержать беседы.
            </Text>

            <Text tag="p">
                Всегда уверен, что впереди все только лучшее, что все мечты сбудутся и дела наладятся.
            </Text>

            <Text tag="p">
                В компании с радостью поддержит разговор на тему новых идей, как для бизнеса, так и для отдыха.
            </Text>

        </>
    );
}

