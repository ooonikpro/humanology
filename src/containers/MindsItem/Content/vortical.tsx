import styles from '../MindsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Vortical() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Вихревое</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Биоинформер</AuthorLine>
            <Icon name="Vortical" size={{ width: 320, height: 180 }} className={styles.image} />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Мышление наиболее природное. Синтетическое, позитивное, индуктивное.
            </Text>

            <Text tag="p" className={styles.text}>
                Синергетика — это наука о том, как из хаоса рождается порядок. Слово «синергия» в переводе с древнегреческого означает согласованные действия.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>В настоящее время термин синергетика продолжает дискутироваться. В западных источниках ее именуют теорией хаоса или нелинейной динамикой. Для наших целей важно знать, что она занимается так называемыми диссипативными структурами — неравновесными, нелинейными, зыбкими.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Как динамики синергетики мыслят подвижно, с переливами одной мысли в другую, как позитивисты идут к одной точке притяжения, как инволюторы часто поворачивают вспять, перескакивают на предыдущий уровень, что сворачивает поток их мыслей наподобие вихря или изменяющего свои очертания облака.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Принимает решения, потом проверяет. Если полезное - закрепляет. Не жизнеспособное отсеивается. Характеристика «вихревое» означает самоорганизующееся, движущееся подобно вихрю.
            </Text>

            <Text tag="p" className={styles.text}>
                Фактически протекает как быстрый перебор вариантов, их апробация и последующий отсев тех, которые не дают результата. В его основе лежит испытательность — продвижение к цели через пробы и ошибки.
            </Text>

            <Text tag="p" className={styles.text}>
                В определенном смысле его можно сравнить с экспериментом в лаборатории, которой является мозг человека.
            </Text>

            <hr />
            <Text tag="p" size="h6" className={styles.text}>
                Первое преимущество вихревого мышления — живость и естественность. Оно как бы имитирует те процессы, которые реально протекают в природе.
            </Text>

            <Text tag="p" className={styles.text}>
                Другое его преимущество — вера в успех, везучесть. Синергетиков не смущают временные неудачи и текущие ошибки. Они предпринимают попытку за попыткой, пока к ним, наконец, не приходит удача.
            </Text>

            <hr />
            <Text tag="p" size="h6" className={styles.text}>
                Наибольший недостаток этого мышления в том, что интеллектуальный поиск идет вслепую, а значит, неэкономно. Еще одна трудность — его хаотичность, стихийность.
            </Text>

            <Text tag="p" className={styles.text}>
                Синергетический интеллект представляет собой некое подобие цепной реакции, которая раскручивает сама себя. При этом срабатывает механизм положительной обратной связи: если вовремя не остановиться, то концентрация усилий поначалу приводит к взрыву, а затем к медленному остыванию.
            </Text>

            <Text tag="p" className={styles.text}>
                Синергетический интеллект объясняет явления при помощи субстанциональных причин. Сама субстанция (вещество, субстрат) в силу естественного движения порождает явление.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>На примере Аристотеля, вещественная причина скульптуры — это глыба мрамора, из которого она была сделана.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Вихревое мышление оформилось в самостоятельную парадигму и оценилось социумом по достоинству позже всех, хотя оно самое близкое к природным явлениям. Известно, что в естественных условиях все процессы протекают как круговороты.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>В свободной экономике, например, действует «невидимая рука рынка» А. Смита: происходят циклические колебания спроса и предложения, которые и порождают естественную цену товара. Изучая биологическую эволюцию, Ч. Дарвин открыл, что ее источником является борьба за существование и выживание наиболее приспособленных организмов. </i>
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Главный двигатель такой «эволюции» как раз инволюция, так как, во-первых, фокус событий смещается на случайную изменчивость и, во-вторых, нет промежуточных звеньев между видами, они возникают не плавно, а скачком.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Действительно, биологическая самоорганизация начинается с мутаций — внезапного, непредсказуемого изменения генетического материала. Это и есть собственно инволюция, которая порождает пульсирующий хаос, тогда как закрепление и тиражирование полезных мутаций — это уже действие эволюции.</i>
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                <mark className={styles.air}>Лирик</mark> словно в калейдоскопе видит причудливые, переливающиеся картины — то наплывающие, то отдаляющиеся.
            </Text>
            <Text tag="p" className={styles.text}>
                <mark className={styles.water}>Предприниматель</mark> мыслит очень экспериментально: ускоренно перебирает в голове множество вариантов и тестирует их на практическую пригодность.
            </Text>
            <Text tag="p" className={styles.text}>
                <mark className={styles.fire}>Энтузиаст</mark> инициирует социальные процессы, оставляя за собой шлейф мелких эмоциональных завихрений. Мысли «роятся» в его голове, вытесняя друг друга.
            </Text>
            <Text tag="p" className={styles.text}>
                <mark className={styles.earth}>Мастер</mark> как бы «лежит в дрейфе» и ждет попутного ветра. Но как только ситуация становится благоприятной, начинается самоорганизация — его мышление быстро запускается, прокручивая поступающую информацию, выделяет наиболее и наименее удачные варианты действий.
            </Text>

            <PageBreak>Синергетики</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div >
    );
}