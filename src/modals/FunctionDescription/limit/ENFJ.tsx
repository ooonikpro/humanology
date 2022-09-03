import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень ценит вежливость, соблюдение этикета. Если человек его подвел хотя бы один раз, то он его не простит.
            </Text>

            <Text tag="p">
                Злопамятны и обидчивы в вопросах доверия и отношений. Им необходимы постоянные словесные доказательства любви, иначе они начинают грустить и отдаляться.
            </Text>

            <hr />
        </>
    );
}

