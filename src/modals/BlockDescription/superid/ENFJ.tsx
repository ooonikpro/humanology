import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Привлекает информация об объективных законах бытия, о существующих в мире взаимосвязях и соотношениях между его элементами, о теориях, а также привлекают примеры последовательного, ясного логического мышления.
            </Text>
            
            <Text tag="p">
                Ориентируется в подобной информации на уровне личного опыта, не желает сравнивать свое собственное понимание с общепринятым. Неадекватно реагирует на негативную оценку своей логичности.
            </Text>

            <Text tag="p">
                Хотел бы считать, что умеет сопротивляться волевому давлению, защищать свое жизненное пространство.
            </Text>

            <Text tag="p">
                Имеет индивидуальные способы, приемы, шаблоны определения тех границ (психологических, физических), которые не могут быть нарушены, которые не могут быть нарушены. Нуждается в позитивной оценке такого умения.
            </Text>

            <Text tag="p">
                Неосознанно активизируется при возможности проявить себя с лучшей стороны в вопросе волепроявления.
            </Text>

            <Text tag="p">
                Нравится чувствовать себя поборником и защитником, защищать и отстаивать себя и ближайшее окружение при ощущении несправедливости, необъективности, незаконности.
            </Text>
        </>
    );
}