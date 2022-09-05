import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Постоянно отслеживают эмоциональный фон в семье, компании, на работе.
            </Text>

            <Text tag="p">
                Они способны поддержать человека, если у него случилось серьезное горе или эмоциональное потрясение.
            </Text>

            <Text tag="p">
                При этом очень не любят избыточные эмоции, как положительные, так и отрицательные. 
            </Text>

            <Text tag="p">
                Способны поставить на место человека, который слишком эмоционально себя ведет. 
            </Text>
            
            <Text tag="p">
                Сами стараются поддержать спокойный и позитивный эмоциональный фон.
            </Text>

            <hr />
        </>
    );
}

