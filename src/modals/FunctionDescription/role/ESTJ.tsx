import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                На первый взгляд кажется человеком веселым и радушным.
            </Text>

            <Text tag="p">
                Он улыбается, дарит позитивные эмоции, много смеется. Любит дружеские компании, когда в приятной атмосфере можно поговорить, поспорить, обсудить что-то.
            </Text>

            <Text tag="p">
                Часто может быть резким, не всегда способен контролировать эмоции.
            </Text>

            <Text tag="p">
                Если его довести «до ручки», то он способен вспылить и накричать.
            </Text>

            <hr />
        </>
    );
}

