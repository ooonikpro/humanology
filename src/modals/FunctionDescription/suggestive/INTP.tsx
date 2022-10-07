import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Нравятся активные люди, лидеры, которые добиваются своих целей.
            </Text>

            <Text tag="p">
                Его дуал Политик — именно такой человек. Сам не может выстоять в прямом противостоянии — ему не нравится состояние конфликта.
            </Text>

            <Text tag="p">
                Нуждается в том, чтобы его направляли, мотивировали, заставляли делать важные дела.
            </Text>

            <Text tag="p">
                Если рядом с ним нет лидера, то становится апатичным и ленивым.
            </Text>

            <Text tag="p">
                Часто старается заниматься спортом, делать себя сильней, но не всегда на это хватает ресурса.
            </Text>
        </>
    );
}
