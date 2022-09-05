import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Четко отделяет полезные дела от бесполезных.
            </Text>

            <Text tag="p">
                Старается жить так, чтобы потратить минимальное количество времени на работу, обеспечив себя максимальным количеством времени на отдых и хобби.
            </Text>

            <Text tag="p">
                Всегда находит кратчайший путь к цели, старается не перетруждаться, считая, что работа нужна лишь для того, чтобы обеспечить хорошую и комфортную жизнь.
            </Text>

            <Text tag="p">
                Люди этого типа редко бывают трудоголиками.
            </Text>

            <Text tag="p">
                Перед началом любой работы просчитывает, как бы сделать ее максимально быстро и эффективно, не потратив все ресурсы.
            </Text>
        </>
    );
}
