import React from 'react';
import styles from './Tests.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { BlockLink } from '../../components/BlockLink';

export default function Tests() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='PresentationChart'>Тесты</PageTitle>

            <div className={styles.warning}>
                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Тесты не могут определить со 100% вероятностью, так как «люди врут» ©. В том числе и себе. Поэтому постарайтесь считать результаты тестов не как единственно верное решение, а как один из факторов.
                </Text>
                <hr className={styles.line} />
                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Наблюдения за поведением, внешностью, речью являются факторами, которые стоит учитывать первичнее теста.
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Определение соционического типа задача сложная, в решении которой могут ошибаться даже профессионалы.
            </Text>
            <Text tag="p" size="h6" className={styles.text}>
                Наибольшую достоверность даёт применение разных методов и независимое определение типа несколькими людьми.
            </Text>

            <div className={styles.test}>
                <Text tag="p" size="h5" color="accent" className={styles.testTitle}>
                    Экспресс-тест Мегедь-Овчарова
                </Text>

                <Text tag="p" size="h6" className={styles.text}>
                    Один из самых старинных соционических тестов на русском языке.
                </Text>

                <Text tag="p" className={styles.text}>
                    Состоит из 4 пару утверждений по основным дихотомиям. В каждой паре, помеченных буквами, необходимо выбрать только одно, которое вам больше подходит.
                </Text>

                <div className={styles.buttonBlock}>
                    <BlockLink path="/tests/meged-ovcharova" label="Начать экспресс-тест Мегедь-Овчарова" icon="TestSimple" />
                </div>
            </div>

            <div className={styles.test}>
                <Text tag="p" size="h5" color="accent" className={styles.testTitle}>
                    Тест Воробьева
                </Text>

                <Text tag="p" size="h6" className={styles.text}>
                    В 70% случаев результаты теста и результаты последующего типирования полностью совпали.
                </Text>

                <Text tag="p" className={styles.text}>
                    В 5% случаев было явно видно, что результат теста ошибочен. В остальных 25% случаев испытуемые выявляли признаки искажения типа, в результате чего нельзя было с полной уверенностью ни утвердить, ни опровергнуть результат теста.
                </Text>

                <Text tag="p" className={styles.text}>
                    Cоздан Виталием Воробьевым и содержит 28 пар слов.
                </Text>

                <Text tag="p" className={styles.text}>
                    <i>При заполнении теста человеком, знающим соционику, тестирование получается необъективным, поскольку он если не сознательно, то подсознательно пытается предугадать результат.</i>
                </Text>

                <Text tag="p" size="large" className={styles.text}>
                    <i>Человек, не знающий соционику, внимательно и объективно заполняющий тест в 70% случаев получает правильный результат.</i>
                </Text>

                <div className={styles.buttonBlock}>
                    <BlockLink path="/tests/vorobiev" label="Начать тест Воробьева" icon="TestSimple" />
                </div>
            </div>

            <div className={styles.test}>
                <Text tag="p" size="h5" color="accent" className={styles.testTitle}>
                    Тест Филатовой
                </Text>

                <Text tag="p" className={styles.text}>
                    Cоздан Екатериной Филатовой и содержит 40 вопросов.
                </Text>

                <Text tag="p" className={styles.text}>
                    Лично я сомневаюсь в достоверности любых тестов, но этот, судя по отзывам, вроде является самым точным.
                </Text>

                <div className={styles.buttonBlock}>
                    <BlockLink path="/tests/filatova" label="Начать тест Филатовой" icon="TestComplex" />
                </div>
            </div>

            <EndPoint />
        </WhiteCard>
    );
}
