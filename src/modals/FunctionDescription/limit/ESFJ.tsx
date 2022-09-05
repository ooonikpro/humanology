import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Постоянно следит за отношениями между близкими людьми. Очень не любит хамство и грубость.
            </Text>

            <Text tag="p">
                Часто дает советы о том, как надо себя вести, как быть вежливым и учтивым человеком. 
            </Text>

            <Text tag="p">
                Очень не любит снобов и выскочек.
            </Text>

            <Text tag="p">
                Когда с ним начинают говорить свысока, он реагирует на это крайне отрицательно.
            </Text>

            <Text tag="p">
                С людьми держат близкую дистанцию.
            </Text>

            <hr />
        </>
    );
}

