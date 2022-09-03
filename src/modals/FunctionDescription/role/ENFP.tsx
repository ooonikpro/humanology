import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                С первого взгляда кажутся людьми уверенными в себе и пробивными.
            </Text>

            <Text tag="p">
                Часто отпор бывает обидным для оппонента, но он не всегда способен сдержать себя и промолчать.
            </Text>

            <Text tag="p">
                При этом с близкими людьми это мягкий и приятный человек, который никак не проявляет агрессию.
            </Text>

            <hr />
        </>
    );
}

