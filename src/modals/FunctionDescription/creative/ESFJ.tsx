import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеют работать руками и очень хозяйственны. Они умеют заботиться о близких, держат квартиру в чистоте.
            </Text>

            <Text tag="p">
                Часто становятся прекрасными дачниками с лучшими урожаями.
            </Text>

            <Text tag="p">
                Способны превратить в уютное местечко даже старый сарай — они смастерят мебель, повесят коврик, поставят цветы — и все сразу выглядит совсем иначе.
            </Text>

            <Text tag="p">
                Любят вкусно покушать и хорошо отдохнуть.
            </Text>

            <Text tag="p">
                Люди этого типа умеют одеваться, прекрасно сочетают ткани и фасоны, часто сами шьют одежду.
            </Text>
        </>
    );
}
