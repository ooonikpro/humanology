import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеет жонглировать фактами и данными. С помощью анализа данных выбирает наиболее правильный путь решения проблем. 
            </Text>

            <Text tag="p">
                Среди близких и знакомых людей каждому отводит определенное место и ждет действий в соответствии с положением. 
            </Text>

            <Text tag="p">
                В сложной ситуации, требующей нетривиального решения, может растеряться и потерять хватку.
            </Text>
        </>
    );
}
