import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень сложно воспринимать структурированную информацию, заниматься оформлением документов и таблиц.
            </Text>

            <Text tag="p">
                Затруднительно выделить в тексте главное и отсечь второстепенное.
            </Text>

            <Text tag="p">
                Работа с документацией вводит в уныние.
            </Text>

            <Text tag="p">
                Очень сложно слушать нудные, по их мнению, речи о классификациях, о сортировке, о разделах целого.
            </Text>

            <hr />
        </>
    );
}
