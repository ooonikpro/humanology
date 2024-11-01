import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень любит слушать о том, как кто к кому относится.
            </Text>

            <Text tag="p">
                Его интересует тема взаимодействия людей, ему важно знать, любят его или нет, при этом сам он с трудом понимает истинное отношение других людей.
            </Text>

            <Text tag="p">
                Очень любит душевные посиделки в тесной компании, ему не хватает стабильности в отношениях с людьми, часто он слишком доверяет малознакомым личностям.
            </Text>

            <Text tag="p">
                Нужен человек, который сможет объяснить ему, как стоит себя вести, а как нет, с кем общаться, а с кем нет — и с этой ролью прекрасно справляется его дуал — Хранитель.
            </Text>

        </>
    );
}
