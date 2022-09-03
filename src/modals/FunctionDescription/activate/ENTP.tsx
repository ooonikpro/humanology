import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень нужны эмоции. Любит теплые вечера с близкими, дружеские вечеринки, веселые посиделки с коллегами. 
            </Text>

            <Text tag="p">
                Благодаря заряду эмоций, он может дальше работать по 12 часов в сутки и генерировать еще более оригинальные идеи.
            </Text>

            <Text tag="p">
                Всегда с радостью поучаствует в бурном эмоциональном споре, причем не ради результата, а ради процесса спора.
            </Text>

            <Text tag="p">
                Приятно, когда в его семье поддерживается теплый и позитивный эмоциональный фон.
            </Text>

            <hr />
        </>
    );
}

