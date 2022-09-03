import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Старается быть аккуратным и опрятным. Он не любит носить сложную одежду, выбирает приятные ткани и гармоничные цвета.
            </Text>

            <Text tag="p">
                Умеет работать руками: ремонтировать, создавать новые элементы домашнего декора. 
            </Text>

            <Text tag="p">
                Может увлекаться дизайном, сочетанием цветов. 
            </Text>

            <Text tag="p">
                В еде непривередлив, любит простую пищу, вкусы постоянные, меняются крайне редко.
            </Text>

            <hr />
        </>
    );
}

