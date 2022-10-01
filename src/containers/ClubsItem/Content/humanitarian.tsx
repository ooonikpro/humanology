import styles from '../ClubsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Humanitarian() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Humanitarian' back>Гуманитарии</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Настоящая соционика</AuthorLine>
            <div className={styles.clubBlock}>
                <div>
                    <Icon name="Humanitarian" color="accent" size={96} />
                </div>
                <div className={styles.clubTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Гуманитарии
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Интуиты
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Этики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Аристократы
                </Text>
            </div>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Кино
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Театр
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Музыка
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Шоу-бизнес
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Литература
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Педагогика
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Журналистика
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Психология
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Иностранные языки
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Развитое дивергентное мышление.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Творческое мышление, генерируют идеи, понимают мысли и чувства других людей, видят возможности развития социальной реальности.
            </Text>

            <Text tag="p" className={styles.text}>
                Пытаются интуитивно постичь грядущие события и изменения ситуации и донести полученные знания до окружающих.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Владеют искусством налаживания отношений.
            </Text>

            <Text tag="p" className={styles.text}>
                Практической деятельности избегают, но вдохновляют на нее других, проявляя при этом чудеса изобретательности.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Многого добиваются, играя на чувствах и межличностных отношениях.
            </Text>

            <Text tag="p" className={styles.text}>
                Мастера духовной поддержки и психологической помощи, они часто подсказывают окружающим цель или смысл жизни, помогают избавиться от скуки и депрессии, умеют завести и поддержать увлекательную беседу.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                У гуманитариев часто просят совета «за жизнь».
            </Text>

            <Text tag="p" className={styles.text}>
                Тянутся к мистике, оккультизму, где вполне востребован их дар предвидения.
            </Text>

            <Text tag="p" className={styles.text}>
                Многие гуманитарии находят себя в политике — как идеологи. Их тонкое психологическое чутье может быть реализовано в маркетинге и управлении персоналом.
            </Text>

            <hr />

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INFJ" className={styles.sociotype} />
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