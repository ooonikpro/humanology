import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Всегда знают, что можно сказать человеку, а что нельзя.
            </Text>

            <Text tag="p">
                Они умеют выбрать подходящее время, чтобы подойти к человеку и попросить что-то сделать, избежав отказа. 
            </Text>

            <Text tag="p">
                Прекрасные манипуляторы, способны добиться от любого человека чего-угодно с помощью разговоров, комплиментов, случайных фраз.
            </Text>

            <Text tag="p">
                Видит, как кто к нему относится, понимает, что нужно сделать, чтобы это отношение улучшить.
            </Text>
        </>
    );
}
