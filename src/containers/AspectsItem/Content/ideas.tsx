import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Ideas() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectIdeas' back>Идеи</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Черная интуиция</Text>
                <Icon name='AspectIdeasMini' size={24} />
            </div>

            <Icon name="AspectIdeas" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Идеи
            </Text>

            <Text tag="p" size="h5" color="accent">
                Интуиция возможностей
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Возможность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Потенциал
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Варианты
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Суть
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Смысл
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Способности
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Талант
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Идея
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Оригинальность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Перспектива
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Банальность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Интерес
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Незаурядность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Несёт информацию обо всех перспективах, возможностях в разных ситуациях.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Интуиция возможностей позволяет человеку чувствовать потенциал объектов, возможности человека, улавливать суть различных процессов.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Способность абстрагировать внимание от внешних проявлений предметов, схватывая их содержание и выделяя суть.
                </Text>
                <Text tag="li">
                    Восприятие внутренних качеств и назначения объектов. Умение отделять перспективное от неперспективного, представлять результат.
                </Text>
                <Text tag="li">
                    Оценка качеств своего характера и собственных возможностей.
                </Text>
                <Text tag="li">
                    Изучение и сравнение характеров и способностей других людей.
                </Text>
                <Text tag="li">
                    Способность противопоставлять и отстаивать свои идеи и взгляды.
                </Text>
            </Text>

            <hr />

            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Перспективы, возможности, положительный потенциал, суть, сущность, пришит, новые идеи, выдвижение гипотез, теория, проницательность, интерес, оригинальность, необычность, фантастичность, вера.

                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Бесперспективность, альтернатива, отрицательный потенциал, отсутствие сути, бессмысленность, парадокс, забытое старое, проницательность, серость, заурядность, скука, подавленные возможности, реальность, неверие, сенсация.

                </Text>
            </div>


            <PageBreak>Эксперты интуиции возможностей</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}
