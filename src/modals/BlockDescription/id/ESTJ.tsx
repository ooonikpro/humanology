import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В повседневной деятельности подспудно отслеживает соблюдение логичности, справедливости во всем. 
            </Text>

            <Text tag="p">
                Спонтанно защищает, отстаивает собственную систему ценностей, выработанное на жизненном пути понимание справедливости, с которым он живет.
            </Text>
            
            <Text tag="p">
                Сопротивляется любому давлению, силовому воздействию.
            </Text>
        </>
    );
}
