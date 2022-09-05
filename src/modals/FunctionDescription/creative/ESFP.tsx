import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Прекрасно видит, кто как к кому относится, и способен это отношение менять в выгодную для себя сторону.
            </Text>

            <Text tag="p">
                Может очаровать человека, всегда знает, как к кому подступиться.
            </Text>

            <Text tag="p">
                Легко может помириться с кем-угодно, вернуть отношения в предыдущее состояние, манипулировать отношениями.
            </Text>

            <Text tag="p">
                Для них отношения — это инструмент для достижения целей.
            </Text>

            <Text tag="p">
                Сможет договориться с кем-угодно на выгодных ему условиях.
            </Text>
        </>
    );
}
