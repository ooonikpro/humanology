import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Восхищаются пробивными людьми, лидерами, уверенными в себе. Очень не любят «слабаков» и «неудачников».
            </Text>

            <Text tag="p">
                Умеют манипулировать такими людьми, добиваться от них того, что нужно.
            </Text>

            <Text tag="p">
                Лирику нужно, чтобы им кто-то руководил, причем не только в работе, но и в жизни.
            </Text>

            <Text tag="p">
                Лишь с помощью руководства Лирик может мобилизоваться, повысить свою работоспособность, уменьшить влияние лени.
            </Text>

            <hr />
        </>
    );
}
