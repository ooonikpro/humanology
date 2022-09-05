import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеет увидеть, в чем человек силен, в чем его возможности, подбодрить, показать сильные стороны, указать, в каком направлении нужно двигаться.
            </Text>

            <Text tag="p">
                В сложной жизненной ситуации способен найти выход, часто нестандартный и неочевидный.
            </Text>

            <Text tag="p">
                Любит неординарные идеи и не боится неизвестности.
            </Text>
        </>
    );
}
