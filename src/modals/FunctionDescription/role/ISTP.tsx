import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                На первый взгляд кажется человеком пунктуальным, старается приходить вовремя, правильно рассчитывать свое время на работу и отдых.
            </Text>

            <Text tag="p">
                В ситуации, когда нет времени, но нужно действовать, не впадает в панику, а ищет способы решения проблемы, пытается выиграть время. 
            </Text>

            <Text tag="p">
                Очень не любит, когда ему навязывают временные графики, старается работать по удобному для себя расписанию.
            </Text>

            <hr />
        </>
    );
}

