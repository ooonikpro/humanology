import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Переживает по поводу того, что у него не осталось времени.  
            </Text>

            <Text tag="p">
                Эти переживания касаются как глобального вопроса — «жизнь проходит, а ничего не происходит», так и локального — «не успеваю сделать работу, как быть».
            </Text>

            <Text tag="p">
                Может долго собираться, и лишь в последний момент понять, что не успевает.
            </Text>

            <Text tag="p">
                Ценит свое время, считает, что время — это невосполнимый ресурс.
            </Text>

            <hr />
        </>
    );
}

