import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                На подсознании отслеживает все перспективы и варианты развития событий, ненужные и невыгодные отсекая. 
            </Text>

            <Text tag="p">
                Способен высмеивать дурацкие, по его мнению, идеи.
            </Text>

            <Text tag="p">
                Ему тяжело общаться с людьми, которые витают в облаках, поскольку он прагматик и каждую идею рассматривает как способ получения выгоды. Идеи ради идей не ценит.
            </Text>

            <hr />
        </>
    );
}

