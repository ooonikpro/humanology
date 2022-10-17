import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ENTP() {
    return (
        <>
            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стимульная группа
            </Text>
            <Text tag="p" color="role" size="h6" className={styles.text}>
                Уникальность
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Стимулируются к работе тем, что ново, необычно, нестандартно, нетрадиционно, оригинально. Увлекаются новыми перспективными направлениями деятельности, науки, религии.
            </Text>

            <Text tag="p" className={styles.text}>
                В работе их привлекает необычность, увлекательность задачи, ее сложность, далеко идущие и масштабные последствия предлагаемых проектов. Они способны заглянуть в будущее, увидеть отдаленные, невидимые другим перспективы, и, как интуиты, впоследствии оказываются правы.
            </Text>

            <Text tag="p" className={styles.text}>
                Очень часто они выступают в роли первопроходцев, первооткрывателей, несут миру новые идеи, новые направления мысли. Многие люди не способны их понять, так как представители этой группы видят далеко вперед своего времени.
            </Text>

            <Text tag="p" color="grey" className={styles.text}>
                Читайте подробнее про рыцарей
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/suits/knight" label="Рыцари" icon="Knight" />
            </div>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Темперамент
            </Text>
            <div className={styles.pair}>
                <Text tag="p" color="role" size="h6" className={styles.text}>
                    Сангвиник
                </Text>
                <Icon name="Sanguine" size={{ width: 40, height: 16 }} color="water" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Гибко-разворотливый
                </Text>
            </div>

            <Text tag="p" size="h6" className={styles.text}>
                Беспокойны внешне, но спокойные внутри.
            </Text>

            <Text tag="p" className={styles.text}>
                Их можно охарактеризовать как средне-уравновешенные. Из-за внешней активности многие их принимают за холериков, но это не так: после вспышек раздражительности они очень быстро успокаиваются.
            </Text>

            <Text tag="p" className={styles.text}>
                Достаточно переключится на какой-либо другой внешний стимул, что они и делают благодаря иррациональной экстраверсии.
            </Text>

            <Text tag="p" className={styles.text}>
                Настоящий же холерик, пока не выплеснет накопившееся раздражение наружу, не успокоится. Без особых последствий ссорятся и мирятся <mark className={styles.fire}>Политик</mark> и <mark className={styles.fire}>Лидер</mark>, легко переключают свое внимание с раздражающей темы на приятную <mark className={styles.water}>Советчик</mark> и <mark className={styles.water}>Новатор</mark>.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мышление
            </Text>

            {
                DETAIL_CARD_MINDS.slice(0, 1).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
            }

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стиль общения
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Деловой
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Мужской стереотип коммуникабельности.
            </Text>

            <Text tag="p" className={styles.text}>
                Общение для деловых в первую очередь — сотрудничество. Деловые склонны обсуждать, что сделано или следует сделать, предлагают что-то сделать или договариваются о совместных действиях.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом, обсуждая действия, деловые нередко рассматривают других как средства достижения целей, игнорируя их отношения, чувства, мнения.
            </Text>

            <Text tag="p" className={styles.text}>
                Считают общение состоявшимся тогда, когда из него можно извлечь какую-то практическую пользу. В своих оценках реальности они опираются на результат действия, воспринимая мир объектно и конкретно.
            </Text>

            <Text tag="p" className={styles.text}>
                Чтобы остаться удовлетворенным общением, оно должно ему принести реальные результаты. Для них содержательное общение — это деловое сотрудничество. Общение они воспринимают, как конструктивное взаимодействие, приносящее в жизнь реальные перемены.
            </Text>

            <Text tag="p" className={styles.text}>
                Это происходит в следствии того, что экстравертная базовая функция направлена наружу. Поэтому они и демонстрируют, как бы показывая себя во вне. И спрашивают о том же: «А чем ты занят? А что ты делал? Чем занимаешься? Что будешь делать?».
            </Text>

            <Text tag="p" className={styles.text}>
                Общение деловых — активное ожидание чувств. Своей активностью стремятся вызвать чувства к себе и наткнуться будущего избранника среди своих дел.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Литературный архетип — рыцарь, спасающий принцессу.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мировоззрение
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Хаотичный нейтральный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Подчиняется своим капризам. В первую и в последнюю очередь он — индивидуалист.
            </Text>

            <Text tag="p" className={styles.text}>
                Выше всего он ценит собственную свободу, но не склонен защищать свободу других.
            </Text>

            <Text tag="p" className={styles.text}>
                Он старается избегать властей, ненавидит ограничения и бросает вызов традициям. В то же время не пытается сознательно уничтожить любые организации — чтобы сделать подобное, он должен был бы быть мотивирован добром (и желанием освободить других) или злом (и желанием заставить всех, отличных от него самого, страдать).
            </Text>

            <Text tag="p" className={styles.text}>
                Поведение хаотичного не является совершенно непредсказуемым: например, если он стоит перед выбором — перейти реку через мост или вброд, то почти наверняка он перейдёт по мосту.
            </Text>
        </>
    );
}
