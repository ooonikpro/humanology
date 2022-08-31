import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Общепринятые представления о конкретных позитивных возможностях, способностях. Построение общих логических взаимосвязей только на основе личностного опыта.
            </Text>
            
            <Text tag="p">
                Поэтому любая необходимость создавать новые системные соотношения объектов вызывает затруднения.
            </Text>

            <Text tag="p">
                Стремится реализовать конкретную идею, возможность при ограниченном социальными нормами понимании последней.
            </Text>
        </>
    );
}