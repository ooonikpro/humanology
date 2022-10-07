import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Если довести до ручки может довольно резко дать отпор.
            </Text>

            <Text tag="p">
                Сам по себе довольно-таки спокойный, но, иногда, особенно, когда задевают его интересы или территорию, он может довольно резко дать отпор.
            </Text>

            <Text tag="p">
                На сильное и постоянное противостояние не способен, но дать быструю и агрессивную атаку он может, правда случается это редко, для этого человека нужно «довести до ручки».
            </Text>

            <Text tag="p">
                Чтобы отвечать на агрессию, требуется много сил, поэтому он старается избежать вражды и соперничества.
            </Text>

        </>
    );
}

