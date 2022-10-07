import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Общепринятые представления о волевом воздействии, давлении, проявлении волевых качеств. 
            </Text>
            
            <Text tag="p">
                Строит конкретные взаимосвязи и соотношения на основе личного опыта. Поэтому болезненно воспринимает критику аналитических способностей, испытывает затруднения, сталкиваясь с незнакомой логической схемой.
            </Text>

            <Text tag="p">
                Пытается добиться такой степени влиятельности в обществе, которая соответствует усвоенным нормам представлений о влиятельности. Реализует это посредством личного представлений об интеллекте, о логических взаимосвязях.
            </Text>
        </>
    );
}