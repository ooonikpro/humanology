import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Всегда в состоянии постоять за себя.
            </Text>

            <Text tag="p">
                Будучи человеком простым и миролюбивым, не терпит, когда нарушают его границы и ведут себя некорректно по отношению к нему.
            </Text>

            <Text tag="p">
                Способен добиться от человека чего-угодно, он не оставит оппонента в покое, пока не получит свое.
            </Text>

            <Text tag="p">
                Любит покомандовать, постоянно дает советы и руководит близкими.
            </Text>

            <hr />
        </>
    );
}

