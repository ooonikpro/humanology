import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Окружает себя необходимыми вещами для выполнения рабочих и домашних обязанностей. 
            </Text>

            <Text tag="p">
                Честный человек, законы старается не нарушать.
            </Text>

            <Text tag="p">
                Неосознанно соблюдает собственный порядок, старается разложить вещи так, чтобы не надо было их долго искать в случае необходимости.
            </Text>

            <hr />
        </>
    );
}

