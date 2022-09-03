import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Реалист, он ставит те задачи, которые реально выполнить.
            </Text>

            <Text tag="p">
                Не витает в облаках, смотрит на жизнь трезво, без преобладания оптимизма или пессимизма.
            </Text>

            <Text tag="p">
                Если человек не хочет его слушать «по-нормальному», может надавить, заставить подчиняться. 
            </Text>

            <Text tag="p">
                Уважает субординацию, в работе не терпит фамильярности.
            </Text>
            <Text tag="p">
                Уважает субординацию, в работе не терпит фамильярности.
            </Text>
        </>
    );
}
