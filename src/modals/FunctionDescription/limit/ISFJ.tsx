import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Всегда отслеживает эмоциональное состояние людей вокруг.
            </Text>

            <Text tag="p">
                Боится показаться слишком холодным и закрытым. В различных кругах общения ведет себя по-разному.
            </Text>

            <Text tag="p">
                Нуждается в оптимистичных людях, которые покажут ему, что жизнь — это веселая штука, что не стоит переживать по пустякам, и что в итоге все будет хорошо.
            </Text>

            <Text tag="p">
                Не способен выдерживать отрицательные эмоции долгое время, такое общение его истощает.
            </Text>

            <hr />
        </>
    );
}
