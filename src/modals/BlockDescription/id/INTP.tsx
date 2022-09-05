import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В результате пройденного жизненного опыта непроизвольно различает суть вещей, заложенные возможности и внутренние качества.
            </Text>

            <Text tag="p">
                В первую очередь замечает негативные черты, качества. 
            </Text>

            <Text tag="p">
                Развитая логика позволяет легко структурировать события и явления в ходе повседневной деятельности. 
            </Text>
        </>
    );
}
