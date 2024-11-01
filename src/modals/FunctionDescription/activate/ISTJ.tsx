import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Живут в своем, довольно-таки размеренном режиме. Они не любят непунктуальность, срывы сроков, внезапные дела.
            </Text>

            <Text tag="p">
                Может мобилизовать внезапная важная работа, которая должна быть сделана в короткий срок, при этом, по завершении этой работы, он снова расслабится и будет жить в своем темпе.
            </Text>

            <Text tag="p">
                Очень любит читать исторические книги, его интересует течение времени, он верит в судьбу и мистические совпадения, часто увлекается эзотерикой.
            </Text>

        </>
    );
}

