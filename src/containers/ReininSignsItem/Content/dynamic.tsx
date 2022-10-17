import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';


export default function Dynamic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Dynamic' back>Динамики</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Татьяна Прокофьева</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                Динамический подход — для изучения динамических свойств информацию о движении, развитии собирают в разные моменты времени. Это синтез информации.
            </Text>

            <Text tag="p" className={styles.text}>
                Опора на динамические, изменяющиеся характеристики объекта, ситуации, процесса.
            </Text>

            <Text tag="p" className={styles.text}>
                Более подвижны, даже сидя на месте, чаще меняют позу, жестикулируют. Они чаще замечают изменения ситуации.
            </Text>

            <Text tag="p" className={styles.text}>
                Скорее обратят внимание на перемены, развитие, изменения, касающиеся как самих мамы и сына, так и их отношений.
            </Text>

            <Text tag="p" className={styles.text}>
                В речи наблюдаются ускорения и замедления темпа, нарастание звука, интонации (в рамках одной фразы). Описания подробные, слитные. Перед ответом елозят.
            </Text>

            <Text tag="p" className={styles.text}>
                Не могут долго сидеть спокойно, крутят в руках предметы, шевелят пальцами, покачивают ногой. Даже при стоянии движения волной проходят по всему телу и лицу.
            </Text>

            <PageBreak iconName='Dynamic'>Динамики</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}