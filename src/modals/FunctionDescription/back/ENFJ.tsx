import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Временами любит вести себя нестандартно, эпатировать публику.
            </Text>

            <Text tag="p">
                Удивляет других неожиданными талантами, может сказать близким, кому чем стоит заниматься, и к чему такая деятельность приведет.
            </Text>

            <Text tag="p">
                Могут выбирать действительно интересные темы для работы, особенно, если работа связана с исследованиями.
            </Text>

            <Text tag="p">
                Им нравится развивать чужие идеи, превращать их в новые, оригинальные варианты.
            </Text>

        </>
    );
}

