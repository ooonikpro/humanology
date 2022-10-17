import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ESTJ() {
    return (
        <>
            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стимульная группа
            </Text>
            <Text tag="p" color="role" size="h6" className={styles.text}>
                Статус
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Мотивируется к работе следующими стимулами: престижное положение в обществе, власть, влияние, успешное продвижение по службе, возможность карьеры, внимание и уважение окружающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Всегда склонны быть в центре внимания, около половины руководителей предприятий относится именно к этой стимульной группе.
            </Text>

            <Text tag="p" className={styles.text}>
                Для них очень важны внешние символы успеха — просторные кабинеты с современной офисной мебелью и оргтехникой, шикарные машины, громкие должности.
            </Text>

            <Text tag="p" color="grey" className={styles.text}>
                Читайте подробнее про королей и королев
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/suits/king" label="Короли и королевы" icon="King" />
            </div>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Темперамент
            </Text>
            <div className={styles.pair}>
                <Text tag="p" color="role" size="h6" className={styles.text}>
                    Холерик
                </Text>
                <Icon name="Choleric" size={{ width: 40, height: 16 }} color="fire" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Линейно-напористый
                </Text>
            </div>


            <Text tag="p" size="h6" className={styles.text}>
                Отличаются как внутренним, так и внешним беспокойством.
            </Text>

            <Text tag="p" className={styles.text}>
                Самый неуравновешенный: когда на пути холерического социотипа возникает внезапное препятствие, из-за экстраверсии он не в силах сдержать возбуждение — оно выплескивается наружу.
            </Text>

            <Text tag="p" className={styles.text}>
                Обойти препятствие ему тоже трудно из-за своей рациональной прямолинейности.
            </Text>

            <Text tag="p" className={styles.text}>
                Взрывным холерическим темпераментом отличается и нервозный <mark className={styles.fire}>Администратор</mark>, и беспокойный <mark className={styles.water}>Предприниматель</mark>, и взволнованный <mark className={styles.water}>Наставник</mark>, и обладающий сильным эмоциональным прессингом <mark className={styles.fire}>Энтузиаст</mark>.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мышление
            </Text>

            {
                DETAIL_CARD_MINDS.slice(1, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
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
                Законопослушный злой
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Методично получает то, что он желает, действуя в рамках собственного морального кодекса или в рамках законов, не обращая внимания на страдания окружающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Целью может быть как личная выгода, так и благополучие общества в таком виде, в каком он его понимает.
            </Text>

            <Text tag="p" className={styles.text}>
                Ценит традиции, преданность и порядок, но не ценит свободу, достоинство и жизнь. Он соблюдает правила, но живет без милосердия и сострадания.
            </Text>

            <Text tag="p" className={styles.text}>
                Склонен действовать в рамках иерархии; он предпочитал бы править, но зачастую готов служить. Он не любит нарушать законы и обещания; отчасти это вызвано его природой, отчасти — тем, что законы могут защищать его самого.
            </Text>
        </>
    );
}
