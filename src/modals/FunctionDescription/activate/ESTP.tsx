import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Любит провести время в веселой и шумной компании, где можно покричать, громко посмеяться, эмоционально расслабиться.
            </Text>

            <Text tag="p">
                При этом часто стесняется своих положительных эмоций и показывает их лишь под влиянием алкоголя.
            </Text>

            <Text tag="p">
                Бывают вспыльчивы, причем всегда переживают после того, как не специально накричали на кого-то.
            </Text>

            <Text tag="p">
                Не всегда может самостоятельно «отрегулировать» накал своих эмоций.
            </Text>

        </>
    );
}

