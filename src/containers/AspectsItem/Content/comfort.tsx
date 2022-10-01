import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

export default function Comfort() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectComfort' back>Комфорт</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Белая сенсорика</Text>
                <Icon name='AspectComfortMini' size={24} />
            </div>

            <Icon name="AspectComfort" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Комфорт
            </Text>

            <Text tag="p" size="h5" color="accent">
                Сенсорика ощущений
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Комфорт
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Уют
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Тепло
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Холод
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Вкус
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Отдых
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Наслаждение
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Удовольствие
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Жажда
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Голод
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Текстура
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Материал
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Расслабленность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Напряженность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Несет информацию о соотношениях в пространстве, об ощущениях организма, о комфорте.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Белая сенсорика — это аспект, который показывает влияние внешних факторов на самочувствие человека.
            </Text>

            <hr />

            <PageBreak>Знаки аспекта</PageBreak>
            <div className={styles.grower}>
                <Icon name="SquarePlus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Приятные ощущения, комфорт, удобство, гармония, красота, привлекательность, отдых, здоровье, расслабленность, хорошее самочувствие, удовольствие, наслаждение, чувствительность.
                </Text>
            </div>
            <div className={styles.grower}>
                <Icon name="SquareMinus" color="accent" size={24} />
                <Text tag="p" size="large" className={styles.text}>
                    Неприятные, острые ощущения, дискомфорт, неудобство, дисгармония, безобразие, непривлекательность, работа, усталость, напряжение, болезнь, плохое самочувствие, страдание, боль.
                </Text>
            </div>


            <PageBreak>Эксперты сенсорики ощущений</PageBreak>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}
