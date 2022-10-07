import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не тот человек, который позволит на себе «ездить» и пользоваться своей добротой.
            </Text>

            <Text tag="p">
                Если все хорошо, то этот человек дружелюбный и приятный в общении, но если что-то не так, то он может дать серьезный отпор.
            </Text>

            <Text tag="p">
                Прекрасно понимает, в какой ситуации лучше быть добрым, а в какой — надавить на оппонента.
            </Text>

            <Text tag="p">
                Умеет отстоять свои интересы и интересы своих близких.
            </Text>

        </>
    );
}

