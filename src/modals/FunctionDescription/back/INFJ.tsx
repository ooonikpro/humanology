import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не любит спешить и не любит замедляться.
            </Text>

            <Text tag="p">
                Живет в среднем темпе, старается иметь четкий распорядок дня, не любит, когда этот распорядок нарушается.
            </Text>

            <Text tag="p">
                Пунктуален, работу делает в срок, приходит на встречи вовремя. Не любит отвлекать других людей, не любит и когда отвлекают его.
            </Text>

            <Text tag="p">
                Ценит людей, которые с уважением относятся к его времени.
            </Text>

        </>
    );
}

