import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Нужно иметь рядом человека, который смог бы спрогнозировать результат его действий. 
            </Text>

            <Text tag="p">
                Ему важно знать, когда случится какое-либо событие, а также что следует из любых его действий.
            </Text>

            <Text tag="p">
                В сложных ситуациях Политику хочется доверится человеку, который лучше его знает, что ждет его в будущем, и в этом ему идеально помогает дуал — Критик.
            </Text>

            <hr />
        </>
    );
}
