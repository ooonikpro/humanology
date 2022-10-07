import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Привлекает информация о конкретной позитивной перспективе, предстоящих приятных сюрпризах судьбы.
            </Text>

            <Text tag="p">
                Часто чувствует недостаток умения прогнозировать, разглядеть положительные стимулы в перспективе.
            </Text>

            <Text tag="p">
                Хотел бы считать, что умеет управлять общей эмоциональной атмосферой, поддерживать нужное состояние, запал. Нуждается в оценке этого умения.
            </Text>

            <Text tag="p">
                Неосознанно активизируется в случае необходимости проявить себя зажигателем нужной эмоциональной атмосферы, преподнести эмоциональный сюрприз.
            </Text>
        </>
    );
}
