import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень интересуют человеческие отношения. Для него важно знать, что люди к нему относятся положительно, любят, ценят.
            </Text>

            <Text tag="p">
                Ненавидят навязчивость в людях, они стараются установить границы в общении, которые переходить не стоит никому.
            </Text>

            <Text tag="p">
                Мечтает о нейтрально-положительном эмоциональном фоне в его среде обитания.
            </Text>

        </>
    );
}

