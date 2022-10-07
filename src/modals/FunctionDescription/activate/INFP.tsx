import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                С трудом переживает строгую дисциплину на работе и дома.
            </Text>

            <Text tag="p">
                Ему нужно обладать какой-то минимальной свободой. При этом Лирику очень важно, чтобы его близкие могли прояснить и проанализировать некоторые ситуации, которые сам он понять не может.
            </Text>

            <Text tag="p">
                Любит действовать по красивому и четкому плану, постепенно достигая цели.
            </Text>

        </>
    );
}

