import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Живо интересуется вопросами бизнеса, самореализации, эффективности работы. 
            </Text>

            <Text tag="p">
                Если работа кажется ненужной и бесполезной, то он, по возможности, не будет ее делать. 
            </Text>

            <Text tag="p">
                Не всегда понимает, сколько денег нужно брать с собой, не умеет вести быт и финансовую отчетность.
            </Text>

            <Text tag="p">
                Старается совмещать приятное с полезным — работу с игрой, чтобы результат был более эффективным.
            </Text>

            <hr />
        </>
    );
}

