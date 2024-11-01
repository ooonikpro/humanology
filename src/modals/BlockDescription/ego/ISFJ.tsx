import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Хорошо видит, кто как к кому относится, знает, как формируются, проявляются и изменяются отношения в различных ситуациях, знает принятую в обществе норму проявления отношений, а также имеет собственное понимание нравственности.
            </Text>

            <Text tag="p">
                Ориентируется как в положительных, так и в отрицательных отношениях.
            </Text>
            
            <Text tag="p">
                Способен существовать в ситуации длительного конфликта, защищая себя и своих близких адекватно сложившейся ситуации.
            </Text>
            
            <Text tag="p">
                Применяет упорство и твердость для отстаивания морально-этических ценностей.
            </Text>
        </>
    );
}

