import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Всегда старается делать полезные вещи, зарабатывать деньги.
            </Text>

            <Text tag="p">
                Девушки считают важным работать, быть деловыми, добиваться каких-то результатов в бизнесе. 
            </Text>

            <Text tag="p">
                При этом долгая и упорная работа без отпусков и перерывов способна сильно истощить представителей этого типа.
            </Text>

            <hr />
        </>
    );
}

