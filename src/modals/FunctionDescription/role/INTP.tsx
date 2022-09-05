import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Производит впечатления ухоженного человека, которого заботит его здоровье и комфорт.
            </Text>

            <Text tag="p">
                Всегда старается быть опрятным, его вещи чисты и выглажены. Он любит покупать одежду и другие предметы для себя, часто неплохо готовит, бывает гурманом.
            </Text>

            <Text tag="p">
                Ему приятно, если у него есть возможность питаться изысканными блюдами, но если такой возможности нет, то ему хватит и простой пищи.
            </Text>

            <hr />
        </>
    );
}

