import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                По возможности старается «гасить» слишком сильные эмоции.
            </Text>

            <Text tag="p">
                Они его выматывают и раздражают. В общении старается быть легким, при этом внутри у него кипит буря, которую он тщательно скрывает.
            </Text>

            <Text tag="p">
                Лишь в крайнем случае способен выплеснуть все эмоции на другого человека, в других ситуациях старается уйти с головой в работу или хобби, чтобы не показывать свое истинное настроение.
            </Text>

        </>
    );
}

