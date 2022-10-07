import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не всегда понимает, какое дело приведет к успеху, а какое — к провалу.
            </Text>

            <Text tag="p">
                Из-за этого можно отметить некоторую прижимистость и экономность у представителей этого типа, особенно, если у них не так много денег и их зарплата нестабильна.
            </Text>

            <Text tag="p">
                Иногда склонен к риску, а иногда, наоборот, отсиживается в «зоне комфорта».
            </Text>

            <Text tag="p">
                Не стремится получить максимальную выгоду из всех своих дел.
            </Text>


        </>
    );
}

