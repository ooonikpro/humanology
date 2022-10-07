import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Всегда отслеживает эмоциональную атмосферу в обществе.
            </Text>

            <Text tag="p">
                Может предчувствовать разгорающийся конфликт, при этом постарается его уладить.
            </Text>

            <Text tag="p">
                Очень близко к сердцу воспринимает несчастье других людей, из-за таких переживаний может даже заболеть.
            </Text>

            <Text tag="p">
                На людях старается не показывать сильные эмоции.
            </Text>

        </>
    );
}

