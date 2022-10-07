import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                С первого взгляда, выглядит человеком дисциплинированным, обязательным и исполнительным.
            </Text>

            <Text tag="p">
                Представители этого типа умеют доводить дела до конца, работают, хоть и не очень быстро, но эффективно, достигая результата.
            </Text>

            <Text tag="p">
                В любой ситуации старается отключить эмоции и разобраться с помощью логики и сопоставления фактов.
            </Text>

            <Text tag="p">
                Очень терпелив, способен делать кропотливую работу.
            </Text>

        </>
    );
}

