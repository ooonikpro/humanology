import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Чувствует затруднения в создании хороших отношений. Нуждается в помощи в понимании симпатий и антипатий.
            </Text>
            
            <Text tag="p">
                Активируется при необходимости преодоления трудностей и проявления волевых качеств, особенно, если это, по его представлению содействует торжеству добра. 
            </Text>

            <Text tag="p">
                Нуждается в положительной оценке своих волевых качеств.
            </Text>
        </>
    );
}
