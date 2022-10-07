import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Отличаются пунктуальностью и уважению к чужому времени.
            </Text>

            <Text tag="p">
                Прекрасно планируют работу во времени так, чтобы не сидеть в последний момент с кучей дел.
            </Text>

            <Text tag="p">
                Стараются экономить время и не тратить его на бесполезные вещи.
            </Text>

            <Text tag="p">
                Очень не любят, когда их время тратят.
            </Text>

            <Text tag="p">
                Могут отчитывать любителей опаздывать, ворчать на них и считать отсутствие пунктуальности существенным недостатком человека.
            </Text>

        </>
    );
}

