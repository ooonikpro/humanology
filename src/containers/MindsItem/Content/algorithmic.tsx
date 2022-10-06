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

export default function Algorithmic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Диалектико-алгоритмическое</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Биоинформер</AuthorLine>
            <Icon name="Algorithmic" size={{ width: 320, height: 180 }} className={styles.image} />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Мышление синтетическое, негативное, дедуктивное. Отражение мира как единства и борьбы противоположностей.
            </Text>

            <Text tag="p" className={styles.text}>
                Как динамики эти типы хорошо синтезируют целостные образы, как дедуктивно мыслящие они все больше усложняют их и как негативисты хорошо работают с противоречиями и парадоксами.
            </Text>

            <Text tag="p" className={styles.text}>
                Ведут диалоги и спорят сами с собой. Тратят много энергии на мышление — более напряженное. Нервничают, могут двигаться во время спора.
            </Text>

            <Text tag="p" className={styles.text}>
                В речи оно пользуются синтаксической конструкцией «если — то — иначе», прогнозирующей варианты развития процесса. В своем пределе диалектика стремится нащупать промежуточную точку динамического равновесия между крайностями.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Диалектический интеллект рождается из столкновения потока и противотока мысли, сознания и бессознательного. Мыслители этого стиля отличаются выраженным стремлением к синтезу противоположностей, снятию противоречий, которые они так обостренно воспринимают.
            </Text>

            <Text tag="p" className={styles.text}>
                Тянет на споры, могут быть язвительными и высмеивать ошибки партнера. Неуравновешены в споре.
                Хорошо работают с вероятностями.
            </Text>

            <Text tag="p" className={styles.text}>
                В речи оно пользуется синтаксической конструкцией «если-то-иначе», прогнозирующей варианты развития процесса.
            </Text>

            <Text tag="p" className={styles.text}>
                Мыслители этого стиля отличаются выраженным стремлением к синтезу противоположностей, снятию противоречий, которые они так обостренно воспринимают.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Его преимущества очевидны: это наиболее гибкое и утонченное мышление. Оно способно легко переключаться на противоположное направление и обладает прогностичностью. Ему сопутствует эффективный тип ассоциативной памяти.
            </Text>

            <Text tag="p" className={styles.text}>
                Алгоритмическое мышление также хорошо решает задачи на классификацию, поскольку имеет дар распознавания сложных образов. За условиями задачи оно усматривает типичный алгоритм ее решения.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>По Аристотелю, диалектико-прогностическое мышление объясняет мир на основе целевых причин. Например, причиной появления скульптуры является представление о ней в голове скульптора. Главную роль при этом играет программа, замысел создателя.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Таким образом, его можно считать телеологическим, а значит, наиболее религиозным по своей сути мышлением. Многие ученые этого типа рано или поздно приходят к вере (не обязательно церковно-конфессиональной).</i>
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Исторически первым представителем диалектического осмысления мира в истории следует назвать Гераклита. Абсолютизируя динамический полюс, он придерживался мнения, что «в одну реку нельзя войти дважды», потому что на входящего во второй раз текут уже иные воды.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                <i>В Новое время его теорию развернул в обширную рациональную систему Гегель. Так как диалектический интеллект по сравнению с другими формами мышления ориентирован наиболее креационистски, то он неизбежно ведет к идее творца, абсолюта, космического разума…</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Два его представителя — <mark className={styles.water}>Наставник</mark> и <mark className={styles.air}>Критик </mark>обычно воспринимаются в социуме как самые интеллектуальные типы.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Они образуют костяк различных интеллектуальных элит, клубов знатоков, эзотерических групп. Они же являются самыми лучшими компьютерными программистами, так как лучше других типов умеют работать с движущимися структурами — алгоритмами.
            </Text>

            <Text tag="p" className={styles.text}>
                Схема алгоритма состоит из блоков и стрелок, показывающих порядок переходов, ветвления и циклы. Причем главным в программе является ее динамическая часть — стрелки, а не блоки. Формула «если — то — иначе» и есть, по сути, ядро любого алгоритма.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                К недостаткам диалектико-алгоритмического мышления следует отнести неустойчивость и нечеткость.
            </Text>

            <Text tag="p" className={styles.text}>
                Алгоритмисты страдают из-за трудности сделать выбор, принять однозначное решение. Это мышление можно скорее сравнить с симфонией, потоком переплетающихся образов, чем четко отлаженным механизмом.
            </Text>

            <Text tag="p" className={styles.text}>
                Еще одна его проблема — повышенная критичность, которая может быть настолько высокой, что вызывает саморазрушение, ввергает в опасность полного отрыва от реальности, а при наличии наследственной предрасположенности с определенной вероятностью ведет к расстройствам психики.
            </Text>

            <PageBreak>Алгоритмисты</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div >
    );
}