import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Самую большую неуверенность испытывает при общении и взаимодействии с другими людьми.
            </Text>

            <Text tag="p">
                Он часто не понимает, как к нему относятся его близкие люди, он не воспринимает полунамеков на отношения, чтобы достучаться до него, нужно говорить предельно ясно: «Ты мне нравишься, и я хочу быть с тобой».
            </Text>

            <Text tag="p">
                С близкими людьми может «колбасить» в области отношений: то он фамильярен и хлопает вас по плечу, то он становится суровым и смотрит на вас, как на незнакомого человека в метро.
            </Text>

            <Text tag="p">
                Это нормально, поскольку человек не имеет определенного паттерна поведения в отношениях и ему тяжело выстраивать корректные отношения как с родственниками и друзьями, так и с коллегами и приятелями.
            </Text>

            <Text tag="p">
                Может быть нетактичным, может сказать глупость или грубость, сам того не осознавая. В этой ситуации не стоит обижаться на этого человека, ведь он не хотел вас обидеть, он просто не знает, как сказать фразу более вежливо.
            </Text>

        </>
    );
}
