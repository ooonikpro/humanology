import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Никогда не возьмется за бессмысленную работу. Он умелый мастер, способен починить практически любую вещь, прекрасно работает руками.
            </Text>

            <Text tag="p">
                Перед тем, как начать что-то делать, он сначала придумывает, как это сделать эффективней, чтобы меньше работать, но больше получить в результате. 
            </Text>

            <Text tag="p">
                Делает лишь те дела, которые необходимы, не терпит суеты.
            </Text>

            <Text tag="p">
                Видит халтурщиков, и умеет отделять их от работяг.
            </Text>
        </>
    );
}
