import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Underling() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Quasidentical' back>Квазитождество</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsPink}>
                <Icon name="Quasidentical" size={128} className={styles.intertypeIconPink} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextPink}>
                Информационная насыщенность, заблуждение
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Неблагоприятные отношения, которые сначала кажутся приятными, а затем вызывают массу сложностей.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                На первый взгляд «квазитождики» похожи — у них похожие слабые зоны и всегда есть, о чем поговорить. На самом деле, отношения квазитождества можно описать двумя словами: полное непонимание. И это непонимание будет преследовать партнеров во всем.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Главной проблемой таких отношений является то, что те ценности и области, которые крайне важны одному из партнеров, для второго являются неважной частью жизни. Именно поэтому дискуссии у «квазитождиков» заканчиваются недоумением и ссорами.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                «Квазитождика» нельзя понять до конца.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Книги, написанные «квазитождиком» очень сложно читать, еще сложней иметь преподавателя «квазитождика» — вероятность, что материал останется непонятым — 99%.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Чтобы понять все, что хочет сказать партнер, нужно потратить массу усилий, а результат будет бесполезным — все это можно было выразить в двух словах, а пришлось прочитать тысячу.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Разговоры с «квазитождиком» раздражают, поскольку кажется, что он специально вносит хаос и запутывает логические цепочки.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Все это можно было бы объяснить гораздо проще.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Квазитождики» могут общаться довольно продолжительное время, но партнеров будет преследовать ощущение бесполезно потраченного времени. В целом, такие отношения легко разрываются, и оба партнера чувствуют облегчение.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Интерес к взглядам и знаниям друг друга, дискуссии, восхищенность интеллектом, интерес к схожим вещам, готовность помочь.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Усложнение простых вещей, желание делать все по-своему, трудности во взаимопонимании, непонимание и осуждение мотивов поступков, обиды, равнодушие, подозрения в ненадежности и измене, скрытое неудовольствие, удары по самолюбимю, поучения, как не нужно делать, долгие споры при непринятии суждений партнера.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Восхваление</Text>
                <Text tag="li" size="h6">Несогласованность</Text>
                <Text tag="li" size="h6">Невосприимчивость</Text>
            </Text>

            <EndPoint />
        </div>
    );
}
