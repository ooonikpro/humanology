import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Всегда положительно относится к ситуациям, когда нужно начинать что-то новое. 
            </Text>

            <Text tag="p">
                Ему очень нравится, когда его идеи воспринимаются в положительном ключе.
            </Text>

            <Text tag="p">
                Важно, чтобы его идеи были оценены.
            </Text>

            <Text tag="p">
                Больше всего боится ситуаций, когда он ничего не может сделать.
            </Text>

            <Text tag="p">
                Ему важно быть нужным, важно давать стимулы и идеи для других людей. 
            </Text>

            <hr />
        </>
    );
}

