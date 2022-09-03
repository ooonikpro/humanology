import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                По своей природе очень ранимы и обидчивы, им сложно пропустить мимо ушей грубость и хамство.
            </Text>

            <Text tag="p">
                Не умеют заставлять людей работать, они не считают, что имеют на это право. 
            </Text>

            <Text tag="p">
                Сторонятся агрессивных людей, предпочитая общество добрых и отзывчивых.
            </Text>

            <Text tag="p">
                Если человек пытается принудить к чему-нибудь, то последний может вспылить и ответить очень грубо.
            </Text>

            <hr />
        </>
    );
}
