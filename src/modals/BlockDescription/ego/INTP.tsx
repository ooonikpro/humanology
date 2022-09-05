import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Хорошо видит и понимает течение событий. Умеет предсказать результаты деятельности, ход развития ситуации.
            </Text>

            <Text tag="p">
                Строит прогнозы, которые часто сбываются. Изучает свойства объектов с точки зрения практического применения.
            </Text> 

            <Text tag="p">
                Умеет создавать новый способ работы и инструмент. Добивается оптимальной технологии, позволяющей прежде всего сэкономить время.
            </Text>
        </>    
    );
}

