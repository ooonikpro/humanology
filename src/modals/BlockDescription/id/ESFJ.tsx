import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Непроизвольно отслеживает отношения в своем кругу общения.
            </Text>

            <Text tag="p">
                Не задумываясь пользуется выработанными на личной практике разнообразными способами установления и поддержания отношений.
            </Text>

            <Text tag="p">
                Информация об отношениях вводит его во вдохновленный, творческий режим, вызывает чувство перспективы.
            </Text>

            <Text tag="p">
                При необходимости помочь кому-нибудь (особенно с отношениями), вложит всю свою волю и средства. Большой волевой потенциал. Считает ситуацию продуктивной, если было что-то реализовано, есть материальный продукт.
            </Text>

            <Text tag="p">
                Стремится к достижению высокого статуса.
            </Text>
        </>
    );
}
