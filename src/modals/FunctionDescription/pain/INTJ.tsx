import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Абсолютно неконфликтный человек. Ситуация противостояния его изматывает за считанные минуты.
            </Text>

            <Text tag="p">
                Он не переносит силовое давление и моральное насилие.
            </Text>

            <Text tag="p">
                Нельзя добиться от него абсолютно ничего, если на него давить.
            </Text>

            <Text tag="p">
                В такой ситуации он может психануть и повести себя неадекватно, после чего будет долго стесняться своих эмоций.
            </Text>

            <Text tag="p">
                Мягкий и добрый человек, который не может пробиваться, «идти по головам» и давить на других.
            </Text>

            <Text tag="p">
                Если представитель этого типа не знает соционики, то он может считать себя «мямлей» и «слабым человеком», хотя это совсем не так.
            </Text>

            <hr />
        </>
    );
}
