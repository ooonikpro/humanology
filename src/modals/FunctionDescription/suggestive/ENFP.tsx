import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень любит, когда его окружает приятная и комфортная атмосфера. 
            </Text>

            <Text tag="p">
                Не умеющий создать эту атмосферу сам, обожает людей, рядом с которыми можно расслабиться и отдохнуть, к примеру, своего дуала Мастера.
            </Text>

            <Text tag="p">
                Очень любят получать удовольствие — ходить на массаж, долго спать, вкусно есть. 
            </Text>

            <Text tag="p">
                Долгое отсутствие сенсорного комфорта ведет к нервному срыву.
            </Text>
            
            <hr />
        </>
    );
}
