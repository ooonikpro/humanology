import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Обладает гибким видением пространственных соотношений и пропорций. Воспринимает мир как гармонию линий в пространстве, гармонию физических ощущений, которая есть равновесие между простотой и изяществом форм.  
            </Text>

            <Text tag="p">
                 Видит богатство форм, их абсолютную и относительную ценность, включая как красивое так и безобразное.
            </Text>

            <Text tag="p">
                Способен приспосабливаться к дискомфорту, устранять неудобство с учетом принятых норм эстетики, текущей ситуации и возможного развития ситуации в будущем.
            </Text>

            <Text tag="p">
                Трезво оценивает и применяет технические средства и материалы для достижения требуемого результата, учитывая конкретные возможности материала и инструмента для заданной цели.
            </Text>
        </>
    );
}