import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function King() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='King' back>Короли и королевы</PageTitle>
            <AuthorLine text='Читать 5 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="King" color="fire" size={96} />
                    <Icon name="Queen" color="fire" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" className={styles.fireText}>
                        Короли и королевы
                    </Text>
                    <Text tag="p" size="h6" className={styles.fireText}>
                        Статус
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.Text}>
                    Экстраверты
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Сенсорики
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Предусмотрительные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.fireText}>
                Мотивируются к работе следующими стимулами: престижное положение в обществе, власть, влияние, успешное продвижение по службе, возможность карьеры, внимание и уважение окружающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Всегда склонны быть в центре внимания, около половины руководителей предприятий относится именно к этой стимульной группе.
            </Text>

            <Text tag="p" className={styles.text}>
                Для них очень важны внешние символы успеха — просторные кабинеты с современной офисной мебелью и оргтехникой, шикарные машины, громкие должности.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Лидеры, лучше всех умеющие управлять.
            </Text>

            <Text tag="p" className={styles.text}>
                Они не испытывают потребности что-то доказывать себе или кому-то. Задают, определяют нормы и правила, по которым живет общество.
            </Text>

            <Text tag="p" className={styles.text}>
                Вычленяют ключевую проблему и решают именно ее. Мыслят большими категориями.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Склонны к авторитарному типу управления.
            </Text>

            <Text tag="p" className={styles.text}>
                Лишены личной жизни и в некотором смысле личной свободы. Их жизнь проходит на виду, личная жизнь имеет социальную значимость.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Внимательны к статусу и территории.
                </Text>
                <Text tag="li">
                    Стремятся расширить влияние.
                </Text>
                <Text tag="li">
                    Подчеркивают авторитет.
                </Text>
                <Text tag="li">
                    Ценят награды, престиж.
                </Text>
                <Text tag="li">
                    Собирают вокруг себя «свиту».
                </Text>
                <Text tag="li">
                    Укрепляют власть в своём «королевстве».
                </Text>
            </Text>

            <PageBreak iconName='King'>Короли и королевы</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}