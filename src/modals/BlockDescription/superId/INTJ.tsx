import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Привлекает информация о хорошем настроении, конкретном позитивном состоянии, чувстве.
            </Text>

            <Text tag="p">
                Хотел бы считать, что умеет устранять серьезные неудобства, уменьшать ощущение дискомфорта в окружающем мире. Нуждается в оценке этого умения. 
            </Text>

            <Text tag="p">
                Неосознанно активизируется в случае, когда возникает необходимость сделать окружающую среду удобнее, что должно привести к лучшему состоянию, поднять настроение хотя бы в непосредственном окружении.
            </Text>
        </>
    );
}
