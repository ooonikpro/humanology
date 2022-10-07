import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Стереотипные представления об отношениях между людьми и о способах выхода из неприятных этических ситуаций.
            </Text>
            
            <Text tag="p">
                Волевые проявления с целью защиты своего жизненного пространства осуществляет только на основе личностного опыта.
            </Text>

            <Text tag="p">
                Из-за ограниченных возможностей дать отпор болезненно реагирует на попытки любого вмешательства в свою жизнь.
            </Text>
        </>
    );
}