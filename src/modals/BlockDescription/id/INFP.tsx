import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Имеет жизненные наработки распознавания конкретной сути вещей и явлений.
            </Text>

            <Text tag="p">
                В разных ситуациях справляется с задачами, требующими выбора между несколькими возможностями, видения позитивных качеств людей или явлений.
            </Text>

            <Text tag="p">
                Широко и гибко пользуется врожденным умением налаживать и поддерживать отношения.
            </Text>

            <Text tag="p">
                Проблемы отношений решает походя, особо не уделяя внимания. 
            </Text>
        </>
    );
}