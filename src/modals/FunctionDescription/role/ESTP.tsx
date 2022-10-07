import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Время от времени уходит от людей в свои мысли, думая о том, к чему привели его какие-то ключевые события жизни и к чему приведут будущие ситуации.
            </Text>

            <Text tag="p">
                Способен уловить значение какого-то небольшого явления в глобальном плане.
            </Text>

            <Text tag="p">
                Уверен, что нет ничего невозможного, надо просто больше работать, и добьешься любой цели.
            </Text>

            <Text tag="p">
                Перед людьми старается произвести впечатление разносторонне развитого человека.
            </Text>

        </>
    );
}

