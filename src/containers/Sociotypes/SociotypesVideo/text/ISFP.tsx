import React from 'react';
import { Text } from '../../../../components/Text';
import { AuthorLine } from '../../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать пока нечего" iconName="Unknown">Неизвестен</AuthorLine>
            <Text tag="b" size="h5" color="role">
                Дипломат / Видео
            </Text>
        </>
    );
}
