import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не всегда понимает, как нужно организовать процесс, чтобы достигнуть конкретного результата.
            </Text>

            <Text tag="p">
                Он часто не уверен в качестве своей работы, переживает, что подведет начальство и коллег.
            </Text>

            <Text tag="p">
                Нужно, чтобы его хвалили и отмечали, насколько он хороший работник — за такие отзывы он будет работать еще лучше.
            </Text>

            <Text tag="p">
                С трудом уходит с «насиженного» места, меняет свою работу.
            </Text>

            <Text tag="p">
                Может считать себя плохим работником, он не уверен в своих профессиональных способностях.
            </Text>

        </>
    );
}
