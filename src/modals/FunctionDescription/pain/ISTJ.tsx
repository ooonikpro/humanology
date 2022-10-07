import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень не любят состояние неопределенности.
            </Text>

            <Text tag="p">
                С трудом воспринимает ответ «не знаю», пытаясь вытянуть из собеседника хоть какое-то четкое мнение.
            </Text>

            <Text tag="p">
                Ему важно пронести через жизнь свое мировоззрение, он редко меняет убеждения, людей в своей жизни, места и увлечения.
            </Text>

            <Text tag="p">
                Считает, что если он может сделать что-то, то и другие могут.
            </Text>

            <Text tag="p">
                Злится, когда оказывается, что не могут.
            </Text>

            <Text tag="p">
                Старается найти себе друзей и единомышленников на всю жизнь, людей, которые не предадут, которые всегда будут рядом.
            </Text>

            <Text tag="p">
                Таких людей он будет любить, опекать, во многом прощать.
            </Text>

        </>
    );
}
