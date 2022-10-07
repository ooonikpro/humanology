import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Важно иметь людей, которые к нему хорошо относятся. Ему тяжело работать в коллективе, где царит напряженная психологическая атмосфера.
            </Text>

            <Text tag="p">
                При том, что им нравится общение с друзьями, они стараются соблюдать дистанцию и вести себя сдержано.
            </Text>

            <Text tag="p">
                Тем людям, которые хорошо относятся к Критику, он готов делать подарки и прощать многие вещи.
            </Text>

            <Text tag="p">
                Любит рассуждать о взаимоотношениях между людьми, часто делится своими соображениями на этот счет.
            </Text>

        </>
    );
}

