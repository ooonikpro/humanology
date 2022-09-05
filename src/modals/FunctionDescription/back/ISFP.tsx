import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Важно хорошее отношение людей.
            </Text>

            <Text tag="p">
                За «спасибо» может сделать многое для человека. Часто поддерживает дружеские связи с коллегами, любит неформальное общение.
            </Text>

            <Text tag="p">
                Его напрягает работа в коллективе, где все относятся друг к другу равнодушно или враждебно.
            </Text>

            <Text tag="p">
                Умеет работать по неформальным связям, сотрудничая со знакомыми ему людьми. 
            </Text>

            <Text tag="p">
                Любит дарить подарки, делать сюрпризы приятным людям, угощать вкусняшками.
            </Text>

            <hr />
        </>
    );
}

