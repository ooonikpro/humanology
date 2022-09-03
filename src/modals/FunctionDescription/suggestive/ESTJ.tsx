import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень хочет разбираться в отношениях между людьми, понимать, как к кому кто относится. 
            </Text>

            <Text tag="p">
                В вопросах отношений ему нужен проводник, которым с легкостью может стать его дуал Гуманист.
            </Text>

            <Text tag="p">
                Очень тяжело работать в коллективе, где отношения не налажены. 
            </Text>

            <Text tag="p">
                Нуждается в искренних отношениях с людьми, ему необходимо доверять своим друзьям и близким.
            </Text>

            <Text tag="p">
                Если человек относится хорошо, то тот обязательно оценит это и постарается отблагодарить.
            </Text>

            <hr />
        </>
    );
}
