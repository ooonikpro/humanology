import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Имеет свои, выработанные по ходу жизни индивидуально удобные способы распределения деятельности во времени.
            </Text>


            <Text tag="p">
                Непроизвольно выбирает лучшие технологии и методы для выполнения текущей работы.
            </Text>

            <Text tag="p">
                Подспудно, не задумываясь, гибко использует подручные способы достижения цели, позволяющие примерно вписаться в тот общий временной план, который наметил для себя.
            </Text>
        </>
    );
}
