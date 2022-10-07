import React from 'react';
import styles from './Tests.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { EndPoint } from '../../components/EndPoint';
import { PageTitle } from '../../components/PageTitle';
import { BlockLink } from '../../components/BlockLink';
import { PageBreak } from '../../components/PageBreak';

export default function Tests() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='PresentationChart'>Тесты</PageTitle>

            <div className={styles.warning}>
                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Тесты не могут определить со 100% вероятностью, так как «люди врут» ©. В том числе и себе. Поэтому постарайтесь брать тесты не как последнее слово, а как один из факторов.
                </Text>
                <hr className={styles.line} />
                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Наблюдения за поведением, внешностью, речью также являются факторами, которые стоит учитывать, возможно, даже первичнее теста.
                </Text>
            </div>

            <PageBreak>Тест Воробьева</PageBreak>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                В 70% случаев результаты теста и результаты последующего типирования полностью совпали.
            </Text>

            <Text tag="p" className={styles.text}>
                В 5% случаев было явно видно, что результат теста ошибочен. В остальных 25% случаев испытуемые выявляли признаки искажения типа, в результате чего нельзя было с полной уверенностью ни утвердить, ни опровергнуть результат теста.
            </Text>

            <Text tag="p" className={styles.text}>
                При заполнении теста человеком, знающим соционику, тестирование получается необъективным, поскольку он если не сознательно, то подсознательно пытается предугадать результат.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Человек, не знающий соционику, внимательно и объективно заполняющий тест в 70% случаев получает правильный результат.
            </Text>

            <div className={styles.buttonBlock}>
                <BlockLink path="/tests/vorobiev" label="Начать тест Воробьева" icon="TestSimple" />
            </div>

            <PageBreak>Тест Филатовой</PageBreak>

            <Text tag="p" className={styles.text}>
                Пока еще не готово …
            </Text>

            <div className={styles.buttonBlock}>
                <BlockLink path="/tests/filatova" label="Начать тест Филатовой" icon="TestComplex" />
            </div>

            <EndPoint />
        </WhiteCard>
    );
}
