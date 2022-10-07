import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Крайне работоспособны, они готовы заниматься делом хоть сутки напролет, если знают, что это принесет нужный результат.
            </Text>

            <Text tag="p">
                Каждый день составляет список дел (в голове или на бумаге), которые необходимо выполнить.
            </Text>

            <Text tag="p">
                Очень практичен, ценит надежность. Любое действие оценивается с точки зрения целесообразности.
            </Text>

        </>
    );
}
