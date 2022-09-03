import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                С большим удовольствием слушает про различные идеи, с радостью воспринимает интересные истории. 
            </Text>

            <Text tag="p">
                Его дуал Новатор очень любит рассказывать свои невероятные теории, а он как раз и будет лучшим слушателем такого монолога.
            </Text>

            <Text tag="p">
                Обожает нестандартных людей, способных на смелые поступки и неординарные решения проблем.
            </Text>

            <Text tag="p">
                Считает, что гораздо лучше быть странным,чем одним из толпы.
            </Text>

            <hr />
        </>
    );
}
