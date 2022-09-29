import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Parallel() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Parallel' back>Параллельные</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsPink}>
                <Icon name="Parallel" size={128} className={styles.intertypeIconPink} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextPink}>
                Веселье, опустошение
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Одни из самых неблагоприятных. Ваш «конфликтер» — это человек, которой из всех соционических типов похож на вас меньше всего.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Это неудобные отношения, которые могут поддерживаться на длительной дистанции, но при сближении всегда возникают проблемы.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                На первый взгляд «конфликтер» кажется человеком интересным, ярким, он привлекает внимание. У него развиты именно те черты характера, которые слабы у вас, и это вызывает восхищение. Но затем возникает легкое ощущение недопонимание, которое возрастает с каждой фразой, с каждой минутой, но которое вроде бы можно исправить. Но исправить его не удается.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Во время ссор «конфликтеры» бьют друг друга по самым слабым местам, из-за чего обида накапливается и никуда не девается.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Каждому человеку хочется доказать что-то «конфликтеру», объяснить, показать, но он, будто бы специально, вас не понимает. Сначала это вызывает недоумение, а затем раздражение, которое сложно удержать в себе.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                При том что «конфликтеры» — это очень разные люди, с разными сильно развитыми сторонами, они совершенно не умеют прикрывать друг друга по слабым функциям. Отсутствие так называемой «защищенности» и общая атмосфера отношений приводят к тому, что «конфликтеры» расходятся и испытывают облегчение.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Конфликтные отношения, хоть и сложны, имеют в себе один очень важный урок.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Судьба сталкивает нас с «конфликтером» в тех ситуациях, когда нам нужно сделать выбор.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Дело в том, что, если мы застопорились на выборе между вариантами А и Б, именно «конфликтер» лучше всех видит, как нужно поступать.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Мирное шутливое общение, свободный обмен мыслями, увлекательные разговоры, восхищение оригинальностью взглядов, ощущение идилии, общность взглядов.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Ссоры из-за мелких противоречий, подчеркивание недостатков, упреки, негодования, обвинения, подозрительность, нервозность, уклонение от обязанностей, безысходность.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Идиллия</Text>
                <Text tag="li" size="h6">Трагедия</Text>
                <Text tag="li" size="h6">Опустошенность</Text>
            </Text>

            <EndPoint />
        </div>
    );
}
