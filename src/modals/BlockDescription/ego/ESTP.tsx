import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Восприятие мира с точки зрения волевых, силовых качеств, борьбы интересов и способов влияния и контроля.
            </Text>
            
            <Text tag="p">
                Хорошо видит силу и волевую мощь различных объектов, людей, общественных структур.
            </Text>

            <Text tag="p">
                В любой ситуации знает, как контролировать, подчинить, подавить, преодолеть, добиться своего.
            </Text>

            <Text tag="p">
                Строит конкретные логические схемы достижения своих целей. Создает правила и порядок, позволяющий добиться максимального влияния. 
            </Text>
        </>
    );
}
