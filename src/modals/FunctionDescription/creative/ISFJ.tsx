import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеет постоять за себя и за своих близких. В ситуации конфликта способен надавить на человека.
            </Text>

            <Text tag="p">
                В повседневной жизни старается держать себя в руках, является человеком уравновешенным и спокойным.
            </Text>

            <Text tag="p">
                Для важна моральная победа над человеком, который обидел его или его близких.
            </Text>

            <Text tag="p">
                Никогда не позволят говорить плохо о близких людях, такие беседы обрываются, а говорящие становятся врагами.
            </Text>
        </>
    );
}
