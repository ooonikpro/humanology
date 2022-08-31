import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Мышление аналитического характера. Хорошо понимает, в каких взаимосвязях находятся одни предметы или явления с другими, какие законы при этом действуют или не действуют.
            </Text>

            <Text tag="p">
                На основе всестороннего анализа выдвигает конкретные догадки о позитивной сути конкретных предметов и явлений, их конкретных позитивных возможностях, высказывает конструктивные идеи.
            </Text>
        </>
    );
}
