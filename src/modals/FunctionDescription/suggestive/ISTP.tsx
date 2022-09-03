import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Любит людей увлекающихся, интересующихся миром вокруг, таких как его дуал Советчик.
            </Text>

            <Text tag="p">
                Приятно, когда его посвящают в свои наблюдения, рассказывают любопытные вещи.
            </Text>

            <Text tag="p">
                Им нужно, чтобы партнер вытягивал их из рутины в необычную жизнь, и именно благодаря таким «вылазкам» он расцветает.
            </Text>

            <Text tag="p">
                Ему важно иметь интересные цели впереди, без них он не видит смысла в жизни и начинает грустить.
            </Text>

            <hr />
        </>
    );
}
