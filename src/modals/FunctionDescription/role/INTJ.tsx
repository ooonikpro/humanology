import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень мягкий человек, с нежной стеснительной улыбкой и приятными манерами.
            </Text>

            <Text tag="p">
                Любит общаться с близкими людьми, дорожит друзьями, не спешит заводить новые знакомства.
            </Text>

            <Text tag="p">
                В компании, где есть много незнакомых людей, может теряться и краснеть, не зная, как себя вести.
            </Text>

            <Text tag="p">
                Всегда вежлив, корректен и учтив.
            </Text>

            <Text tag="p">
                Может помочь людям раскрыть их истинные таланты, подбодрить, вселить веру в способности.
            </Text>

            <hr />
        </>
    );
}

