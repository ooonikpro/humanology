import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеет и любит объяснять различные явления и ситуации.
            </Text>

            <Text tag="p">
                Чем меньше известно однозначных концепций по вопросу, тем с большим интересом он будет выдвигать свои объяснения и выводы.
            </Text>

            <Text tag="p">
                Он легко может увидеть связь между различными схемами, определениями, он умеет жонглировать понятиями и доказывать недоказуемое.
            </Text>

            <Text tag="p">
                Всегда пытается найти причинно-следственные связи между общим и частным, отыскать единое объяснение различным вещам.
            </Text>
        </>
    );
}
