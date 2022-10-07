import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Обожает позитивные эмоции.
            </Text>

            <Text tag="p">
                Для него радость быть рядом с эмоциональным человеком.
            </Text>

            <Text tag="p">
                Его дуал Энтузиаст всегда с радостью обеспечивает необходимые эмоции.
            </Text>

            <Text tag="p">
                В компании близких людей Аналитик становится гораздо более общительным, чем с незнакомыми людьми.
            </Text>

            <Text tag="p">
                Становится очень холодным и отстраненным в том случае, если рядом с ним нет веселых и общительных людей, которые его «подпитывают» своими эмоциями.
            </Text>
        </>
    );
}
