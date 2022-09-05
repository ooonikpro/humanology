import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Теряется, когда рядом с ним проявляют яркие и сильные эмоции.
            </Text>

            <Text tag="p">
                Он не любит, когда кричат, когда громко разговаривают и выясняют отношения.
            </Text>

            <Text tag="p">
                Обычно человек этого типа выглядит мягким, но, если его довести до состояния ярости, он способен на крик.
            </Text>

            <Text tag="p">
                После этого он ощущает себя опустошенным.
            </Text>

            <Text tag="p">
                Боится не только чужих эмоций, но и своих.
            </Text>

            <Text tag="p">
                Идеальная ситуация для представителей этого типа: когда вокруг царит мир, всем хорошо, но по-тихому.
            </Text>

            <hr />
        </>
    );
}
