import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Нравится, когда тяжелая работа приносит хороший результат.
            </Text>

            <Text tag="p">
                Представители этого типа обожают быть полезными, причем, это касается как работы, так и ведения быта или какой-то родственной помощи.
            </Text>

            <Text tag="p">
                Приятно, когда их ценят как людей эффективных, полезных для дела.
            </Text>

            <Text tag="p">
                Хранители ценят функциональные вещи, практичны в быту. Способны долго и упорно работать, если знают, что результат того стоит.
            </Text>

            <Text tag="p">
                Уважают практичных и деловых людей, таких, как их дуал Предприниматель.
            </Text>
        </>
    );
}
