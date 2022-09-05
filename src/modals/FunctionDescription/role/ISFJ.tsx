import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                С первого взгляда выглядит человеком сухим, любителем формальностей.
            </Text>

            <Text tag="p">
                Ему важно соблюдать законы, нормы поведения в обществе. 
            </Text>

            <Text tag="p">
                Очень болезненно воспринимают ситуации несправедливости. Представители этого типа стараются логически обосновывать свои чувства, анализировать проявления эмоций у себя и других людей. 
            </Text>

            <Text tag="p">
                <i>Для ученика очень важно, чтобы информация была структурирована, хаотичную информацию ему воспринимать крайне сложно.</i>
            </Text>

            <hr />
        </>
    );
}

