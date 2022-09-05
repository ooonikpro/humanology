import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В области ощущения своего тела и его потребностей может быть очень неуверенным.
            </Text>

            <Text tag="p">
                Этот человек нуждается в помощи, он хочет учиться понимать свое тело: в этом ему отлично поможет его дуал, у которого сенсорика ощущений — базовая функция, он в ней эксперт.
            </Text>

            <Text tag="p">
                Чтобы чувствовать себя отлично, нужен некий комфорт, которым он сам себя обеспечить не может.
            </Text>

            <Text tag="p">
                Ему приятно, когда он приходит с работы, а его ждет вкусный ужин и теплая постель.
            </Text>

            <hr />
        </>
    );
}
