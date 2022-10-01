import styles from '../QuadrasItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Water() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Water' back>Вода</PageTitle>
            <AuthorLine text='Читать 6 минут' iconName='Time'>Виктор Гуленко</AuthorLine>
            <div className={styles.quadraBlock}>
                <Icon name="Water" color="water" size={96} />
                <div className={styles.quadraTitle}>
                    <Text tag="span" size="h4" className={styles.waterText}>
                        Вода
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Гамма
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.waterText}>
                    Взрослые
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Демократы
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Решительные
                </Text>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Статус
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Красота
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Престиж
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Выгода
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Цены
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Прогнозы
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Перспективы
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Скорость
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Бизнес
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Нравственность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Амбиции
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Мораль
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Отношения
                </Text>
            </div>

            <hr />

            <Text tag="span" size="body" className={styles.text}>
                Кредо
            </Text>

            <Text tag="p" size="h5" className={styles.waterText}>
                Тщательный прогноз — залог успешной авантюры.
            </Text>

            <Text tag="p" className={styles.text}>
                Люди простые в общении и хваткие по жизни.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Любят работать и любят зарабатывать деньги.
            </Text>

            <Text tag="p" className={styles.text}>
                Для них деньги играют важную роль в жизни, ведь представители этой квадры любят не только хорошо поработать, но и хорошо отдохнуть.
            </Text>

            <Text tag="p" className={styles.text}>
                В общении очень демократичны, они ценят не звания, а настоящие таланты окружающих людей.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не выносят снобизм и тяжелых на подъем людей. Не понимают людей, которые не хотят работать.
            </Text>

            <Text tag="p" className={styles.text}>
                Очень важно реализовать себя как в работе, так и в личной жизни.
            </Text>

            <Text tag="p" className={styles.text}>
                Предпочитают «сотрудничать и приобретать». Их можно сразу узнать по присущей им напористости, динамичности, объективному отношению к полученным результатам.
            </Text>

            <Text tag="p" className={styles.text}>
                Они дорожат силой, важностью, субъективными сиюминутными нюансами отношений, умением добиться задуманного, разглядеть перспективы чего-либо.
            </Text>

            <Text tag="p" className={styles.text}>
                В общении эти люди предстают простодушными, демократичными, чуждыми снобизму.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Они разделяют людей на «своих» и «чужих» по собственным критериям — личной симпатии и антипатии.
            </Text>

            <Text tag="p" className={styles.text}>
                Скромность и непритязательность в быту, легкость на подъем и энтузиазм. Вести долгие разговоры о своих чувствах им не нравится, считают, что проверить их можно отношениями.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Они стараются показать себя, реализовать свой потенциал.
            </Text>

            <Text tag="p" className={styles.text}>
                Серьезно относятся к итогам своей работы, любят хорошо потрудиться и получить за это достойную плату.
            </Text>

            <Text tag="p" className={styles.text}>
                Дискомфорт доставляет вынужденное ограничение деловой активности по независящим от них причинам.
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.waterText}>
                Могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Реформировать общество.
                </Text>
                <Text tag="li">
                    Создать демократию.
                </Text>
                <Text tag="li">
                    Развить экономику.
                </Text>
                <Text tag="li">
                    Накопить материальные ресурсы.
                </Text>
                <Text tag="li">
                    Осуществить социальную поддержку.
                </Text>
                <Text tag="li">
                    Дипломатично и гибко достичь поставленной цели — в областях материального обеспечения и безопасности.
                </Text>
            </Text>

            <hr />

            <Text tag="p" size="h6" className={styles.text}>
                Не могут
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Выступать как единое целое.
                </Text>
                <Text tag="li">
                    Открывать новые формы отношений и идей.
                </Text>
                <Text tag="li">
                    Подняться над своим средним уровнем.
                </Text>
                <Text tag="li">
                    Жить в гармонии с природой.
                </Text>
            </Text>

            <hr />

            <div className={styles.waterBlock}>
                <Text tag="p" size="h5" color="air" className={styles.waterText}>
                    Наблюдение и реформы
                </Text>

                <Text tag="p" className={styles.text}>
                    Реформа, параллельно изменяющая не только структуру власти, материальные ресурсы и приоритеты развития, систему ценностей, веру.
                </Text>

                <Text tag="p" className={styles.text}>
                    Перенос приоритета со всего общества на приоритет личности — Мы → Я. Политик в этом блоке, безусловно, сила, но только его дуал Критик может скоординировать процесс, собрать всю информацию и предостеречь от ошибок.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
            </div>

            <hr />
            <div className={styles.waterBlock}>
                <Text tag="p" size="h5" color="air" className={styles.waterText}>
                    Реализация и сохранение
                </Text>

                <Text tag="p" className={styles.text}>
                    Перенос приоритета на личность путем утверждения идеалов благосостояния, духа соревнования, конкуренции. Кредо Предпринимателя — автономия, в том числе постоянное желание личных практических достижений. Это самый прагматичный и выносливый из всех интуитов. Идеальный реализатор реформ, тонко чувствующий развитие конкретной ситуации.
                </Text>

                <Text tag="p" className={styles.text}>
                    Хранитель — носитель веры, уверенности в своих силах, в дружбе. Силой своей веры он способен вытащить из «болота», вернуть вкус к жизни. Может радикально решать проблемы морали волевыми методами в месте их появления.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}