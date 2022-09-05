import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Любит жить неторопливо, но со вкусом.
            </Text>

            <Text tag="p">
                Очень не любит спешащих людей, считает, что они срывают удовольствие и себе, и другим. 
            </Text>

            <Text tag="p">
                С радостью потратит свое время на друзей, даже если у него много работы.
            </Text>

            <Text tag="p">
                Не отличается повышенной пунктуальностью, а также не любит, когда его торопят.
            </Text>

            <Text tag="p">
                Чтобы он все сделал вовремя, его нужно ненавязчиво подталкивать.
            </Text>

            <hr />
        </>
    );
}

