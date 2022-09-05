import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Умеет создать бизнес, имеет деловую хватку.
            </Text>

            <Text tag="p">
                Крайне практичен, он всегда старается объяснить логически, зачем ему та или иная вещь, то или иное действие.
            </Text>

            <Text tag="p">
                Он прекрасно видит, сколько на самом деле стоит вещь, замечает все косяки и недочеты.
            </Text>

            <Text tag="p">
                Всегда живет так, как позволяет его бюджет, из-за чего представителей этого типа часто считают людьми обеспеченными, но бережливыми.
            </Text>

            <Text tag="p">
                Никогда не выкидывает еду, бережно носит одежду годами, знает, в каком магазине что стоит дешевле.
            </Text>

            <hr />
        </>
    );
}

