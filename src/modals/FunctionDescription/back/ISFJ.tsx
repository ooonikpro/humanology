import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Следит за комфортом своих близких и себя. Не любит проводить много времени отдыхая, предпочитая смену деятельности.
            </Text>

            <Text tag="p">
                Старается наводить порядок, содержать дом в чистоте, очень не любит неопрятность.
            </Text>

            <Text tag="p">
                Человек этого типа не жалеет себя в работе, при этом всегда следит за своим здоровьем и знает, когда стоит остановиться, чтобы не сделать себе хуже.
            </Text>

        </>
    );
}

