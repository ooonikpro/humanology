import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Неплохо умеет работать над несколькими проектами одновременно и старается быть максимально эффективным.
            </Text>

            <Text tag="p">
                Он умеет превратить идею в крупное дело, правда, обычно, идей у него гораздо больше, чем окончательных реализаций, поскольку в жизни сама идея находится в приоритете над её реализацией.
            </Text>

        </>
    );
}

