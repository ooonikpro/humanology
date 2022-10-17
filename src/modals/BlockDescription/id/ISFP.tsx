import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В повседневной жизни имеет свой индивидуально установленный уровень притязания, материального благосостояния и влияния в каждой ситуации.
            </Text>

            <Text tag="p">
                Гибко и не задумываясь применяет своё естественное умение устанавливать хорошие отношения, договариваться.
            </Text>

            <Text tag="p">
                Неосознанно использует это умение для укрепления своих позиций, отстаивания своих интересов.
            </Text>
        </>
    );
}
