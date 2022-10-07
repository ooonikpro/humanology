import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Ненавидит хаос и беспорядок. Всегда показывают пример дисциплинированности и ответственности.
            </Text>

            <Text tag="p">
                Перед началом работы они собирают полное «досье», досконально изучают предмет, лишь после этого начинают действовать.
            </Text>

            <Text tag="p">
                Сложно рассказать теорию дела, ему проще показать, как нужно делать.
            </Text>

            <Text tag="p">
                В целом, он гораздо больше практик, чем теоретик.
            </Text>

        </>
    );
}

