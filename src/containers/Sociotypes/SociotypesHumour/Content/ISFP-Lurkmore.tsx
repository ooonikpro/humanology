import React from 'react';
import { Text } from '../../../../components/Text';
import { AuthorLine } from '../../../../components/AuthorLine';

export default function ISFP() {
    return (
        <>
            <AuthorLine text="Читать 2 минуты" iconName="Time">Люркмор</AuthorLine>

            <Text tag="p" size="large" color="accent">
                <i>быдло, жлоб, овуляшки, пикапер, кулинарный сноб, лирушечка, педовка</i>
            </Text>

            <Text tag="p" size="h6" color="role">
                Ценят домашний уют и живут в своём мирке. Возвращают Новатора на землю. Чаще всего живут жизнью обычного жлоба, не глядя дальше своего носа. Добиваются признания у людей, создавая ореол «душевности» путём этических махинаций, например лести. Как и все иррационалы, страшные лентяи.
            </Text>

            <Text tag="p" size="large">
                Также любят давать всем без разбора, чего Новаторы чаще всего не замечают и по-прежнему позволяют называть себя Зайкой вне зависимости от пола, возраста, роста и веса. Отличаются очень низким интеллектом и узким кругозором который не уходит дальше чем поесть, поспать, потрахаться. Работать не любят и не умеют. Становятся художниками, дизайнерами. Иногда неадекватно ведут себя в обществе, ибо интровертные. Является интегральным социотипом Болгарии и Кубы.
            </Text>

            <Text tag="p" size="large">
                Характерный признак: любят готовить и есть плюшки (видимо, поэтому все дюмки после двадцати пяти превращаются в чмошных тётенек, набирающих вес в геометрической прогрессии).
            </Text>

            <Text tag="p" size="body" color="grey">Бочка меда</Text>

            <Text tag="p" size="h6" color="role">
                Обаятельны и как никто другой способны создать приятную атмосфЭру. Могут стать художниками, пейсателями и режиссёрами.
            </Text>

            <Text tag="p" size="body" color="grey">Ложка дегтя</Text>

            <Text tag="p" size="h6" color="accent">
                Как никто другой могут скатиться в полное социальное говно! Вполне вероятно, что знакомая вам педовка — Дипломат.
            </Text>
        </>
    );
}
