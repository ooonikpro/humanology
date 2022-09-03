import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень переживает, что упущено множество потрясающих возможностей и моментов.
            </Text>

            <Text tag="p">
                Ему кажется, что он так и останется невостребованным, что ему не удастся использовать свой шанс.
            </Text>

            <Text tag="p">
                Часто принижает свои способности, нуждается в комплиментах и признании.
            </Text>

            <Text tag="p">
                Умеет выделить перспективные идеи, но редко пользуется этим умением.
            </Text>

            <hr />
        </>
    );
}

