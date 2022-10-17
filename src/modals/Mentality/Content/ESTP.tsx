import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ESTP() {
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
                    Сангвиник
                </Text>
                <Icon name="Sanguine" size={{ width: 40, height: 16 }} color="fire" />
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
                DETAIL_CARD_MINDS.slice(2, 3).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
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
                Хаотичный злой
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Творит всё, к чему его склоняют его желания и не обращает внимания на чужие проблемы.
            </Text>

            <Text tag="p" className={styles.text}>
                Вспыльчив, злобен, непредсказуем и склонен к насилию. Не склонен следовать сложным планам и работать в организованных группах.
            </Text>

            <Text tag="p" className={styles.text}>
                Он может действовать совместно с другими только при условии, что его принуждают к этому, и только до тех пор, пока руководителю группы удаётся предотвратить попытки свержения.
            </Text>

            <Text tag="p" className={styles.text}>
                Он может быть вежливым и обходительным перед превосходящей силой, но даже в этом случае будет пытаться придумать способ уничтожить препятствие, не пострадав самому.
            </Text>
        </>
    );
}
