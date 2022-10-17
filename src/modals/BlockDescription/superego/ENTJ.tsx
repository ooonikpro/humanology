import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Имеет общепринятые представления об эмоциональном мире. Умение поднять настроение, поддерживать атмосферу в коллективе основывается на стереотипных приемах.
            </Text>

            <Text tag="p">
                Комфорт понимает только на основе собственного опыта и собственных представлений.
            </Text>

            <Text tag="p">
                Негибок в этом отношении и не может объективно оценить своё понимание удобства и комфорта.
            </Text>
        </>
    );
}