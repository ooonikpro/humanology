import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Привлекает информация о конкретной организации пространства, о комфортной обстановке вокруг себя. 
            </Text>
            
            <Text tag="p">
                Хотел бы считать, что умеет выбирать достаточно эффективные способы работы, организовать процесс, улучшить его, изменить последовательность операций. Нуждается в оценке этого умения.
            </Text>
        </>
    );
}
