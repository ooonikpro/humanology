import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Самая неуверенная область — это ощущения своего тела.
            </Text>

            <Text tag="p">
                Часто боятся врачей, оттягивают походы к ним на месяцы и года. Способны целый день ничего не есть и удивляться, почему это болит голова и живот.
            </Text>

            <Text tag="p">
                В вопросах сексуальности может впадать в крайности — либо страдать нимфоманией, либо отрицать физическую любовь в принципе.
            </Text>

            <Text tag="p">
                Представители этого типа имеют очень странный вкус, часто брезгливы.
            </Text>

            <Text tag="p">
                Одеваться любят вызывающе, совмещая элементы разных исторических эпох, отдавая предпочтения строгим фасонам и необычным сочетаниям.
            </Text>

        </>
    );
}
