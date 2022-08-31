import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Восприятие мира с точки зрения комфорта и удобства, особенно эмоционального уюта.
            </Text>

            <Text tag="p">
                Хорошо понимает и оценивает комфорт в зависимости от места, времени и ситуации.
            </Text>

            <Text tag="p">
                Стремится снизить негативный накал в общей эмоциональной атмосфере, поднять другим настроение, сознательно меняет состояние другого человека, его эмоции, создавая тем самым конкретную комфортную обстановку вокруг себя.
            </Text>
        </>
    );
}
