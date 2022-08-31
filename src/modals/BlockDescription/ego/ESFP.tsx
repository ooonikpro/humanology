import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Хорошо понимает, как нужно сопротивляться давлению, противостоять попыткам волевого воздействия, сохранять независимость и имеющуюся сферу влияния.
            </Text>
            
            <Text tag="p">
                Манипулирует отношениями, умеет влиять на отношения между людьми, защищая таким образом себя.
            </Text>

            <Text tag="p">
                Устанавливает с людьми такие отношения, которые позволяют чувствовать себя в безопасности, сохранять независимость.
            </Text>
        </>
    );
}

