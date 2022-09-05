import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Помогает делом тем людям, которых любит.
            </Text>

            <Text tag="p">
                Очень остро переживает, если в коллективе кто-то враждует, старается сгладить углы и примирить людей.
            </Text>

            <Text tag="p">
                Идеальная работа для Лирика непрерывно связана с прекрасным коллективом, где все друг друга любят и понимают.
            </Text>

            <Text tag="p">
                Умеет воспользоваться нужным знакомством для своей выгоды.
            </Text>

            <hr />
        </>
    );
}

