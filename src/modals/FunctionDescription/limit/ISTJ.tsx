import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень прижимистый тип, который старается сэкономить на всем.
            </Text>

            <Text tag="p">
                Не любит выкидывать старые вещи, тратить деньги попусту, всегда оставляет большой запас на черный день. 
            </Text>

            <Text tag="p">
                Если видит, что люди действует нецелесообразно и нелогично, то его это раздражает, он начинает разбираться в ситуации.
            </Text>

            <Text tag="p">
                Считает, что большинство процессов в работе уже давно можно было бы автоматизировать.
            </Text>

            <hr />
        </>
    );
}

