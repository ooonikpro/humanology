import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Уделяет достаточное внимание сенсорному комфорту: ему важно быть сытым, чистым и отдохнувшим.
            </Text>

            <Text tag="p">
                Когда ему неудобно, плохо или некомфортно, у него падает настроение и работоспособность.
            </Text>

            <Text tag="p">
                Критически выбирает себе одежду, способен разбираться в качествах тканей и фасонов.
            </Text>

            <hr />
        </>
    );
}

