import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Видит и умеет гибко использовать разнообразие объектов и их свойств. Имеет развитое технологическое мышление — знает как создать оптимальный и продуктивный способ работы, новый инструмент.
            </Text>
            
            <Text tag="p">
                Хорошо чувствует развитие событий в близкой перспективе и пользуется этим умением, чтобы в нужный момент применить свои умения.
            </Text>
        </>
    );
}

