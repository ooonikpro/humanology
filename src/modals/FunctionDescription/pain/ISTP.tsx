import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Теряется, когда вокруг него проявляются сильные эмоции, как положительные, так и отрицательные.
            </Text>

            <Text tag="p">
                Обычно выглядит человеком спокойным, хладнокровным, даже заторможенным.
            </Text>

            <Text tag="p">
                В ситуации конфликта предпочитает уйти, не ввязываясь в дискуссию.
            </Text>

            <Text tag="p">
                Сильные и нестабильные эмоции — это признак плохих отношений, от которых необходимо избавиться.
            </Text>

            <hr />
        </>
    );
}
