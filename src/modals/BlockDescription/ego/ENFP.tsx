import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Хорошо чувствует возможности других людей, наблюдая со стороны, особенно незнакомых, выделяет людей с интересными способностями среди других.
            </Text>

            <Text tag="p">
                Стремится установить хорошие отношения с интересными людьми на близкой дистанции, выразить своё расположение к ним.
            </Text>

            <Text tag="p">
                Находит выход из разнообразных ситуаций, владея видением скрытых возможностей, налаживая хорошие отношения, либо настраивая положительное общественное мнение.
            </Text>
        </>
    );
}

