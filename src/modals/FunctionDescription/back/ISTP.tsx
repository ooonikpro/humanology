import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Прекрасно ориентируются в вопросах законов и их соблюдения.
            </Text>

            <Text tag="p">
                В деловых отношениях ведут себя сдержанно, показывают себя надежными партнëрами по бизнесу.
            </Text>

            <Text tag="p">
                Очень не любят бюрократию, стараются избежать бумажной волокиты.
            </Text>

            <Text tag="p">
                Упрямы, если знают, что правы, и готовы долго и упорно доказывать свою правоту.
            </Text>

        </>
    );
}

