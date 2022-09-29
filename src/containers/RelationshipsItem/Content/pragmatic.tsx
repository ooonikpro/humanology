import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Pragmatic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Pragmatic' back>Деловые</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsGreen}>
                <Icon name="Pragmatic" size={128} className={styles.intertypeIconGreen} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextGreen}>
                Восхищение интеллектом, сотрудничество
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                «Деловики» похожи между собой, эти типы имеют много общего. Партнеры в деловых отношениях очень быстро сближаются.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                У них есть масса общих тем для разговоров, они похоже воспринимают мир вокруг, поэтому легко находят общий язык.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Наряду с родственными – самые нейтральные из всех видов отношений.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Деловикам» интересно общаться друг с другом, они могут вынести из дискуссий много нового. Могут критиковать друг друга, часто устают от общения, но при этом возобновляют связь каждый раз, когда чувствуют необходимость.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Деловики» — это равные партнеры, поэтому их отношения можно назвать товарищескими, в них никто никого не учит и не наставляет. В таких отношениях нет фактора неудобства или сложностей — партнеры могут делиться даже самой личной информацией, и не бояться, что эта информация будет неправильно воспринята.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Партнеры ощущают безопасность при общении друг с другом, ведь у них много общего, и они не будут специально давить на слабые места.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Несмотря на то, что «деловик» прекрасно понимает намеки, часто ответная реакция бывает не настолько сильной, насколько бы хотелось.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В целом, такие отношения не вызывают ярких конфликтов или открытых противостояний, при этом восхищения и удовлетворения партнеры также не испытывают.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Особенностью деловых отношений является то, что общение проходит гораздо плодотворнее и эффективнее в том случае, если силы нужно направить на одну цель или же против одной угрозы.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В этой ситуации «деловики» способны без ссор выполнять нужные задачи, помогать и поддерживать друг друга, и не уставать от общения. В случае же повседневного общения «деловики» могут начать придираться друг к другу и ругаться. Поскольку мобилизованное состояние чаще всего бывает на работе, то эти отношения и называются деловыми.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Основная цель деловых отношений – научить вас более эффективно достигать целей, используя разносторонние методы.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Легкое общение на любые темы, взаимопонимание, чувство равенства, ощущение безопасности, уравновешенность, искренние похвалы, подучивания, расширение знаний и норматива поведения.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Угнетение, давление, насмешки и уколы по слабым, ранимым местам, борьба за лидерство, неприятие целей и ценностей, навязывание своего понимания, нездоровая конкуренция, деловая напряженность, перекладывание ответственности на другого, скука.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Комплимент</Text>
                <Text tag="li" size="h6">Конкуренция</Text>
                <Text tag="li" size="h6">Потеря веры</Text>
            </Text>

            <EndPoint />
        </div >
    );
}