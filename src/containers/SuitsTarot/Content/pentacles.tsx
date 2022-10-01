import styles from '../SuitsTarot.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Pentacles() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Pentacles' back>Пентакли</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Боевая соционика</AuthorLine>
            <div className={styles.suitBlock}>
                <div>
                    <Icon name="Pentacles" color="accent" size={96} />
                </div>
                <div className={styles.suitTitle}>
                    <Text tag="span" size="h4" color="accent" className={styles.text}>
                        Пентакли
                    </Text>
                    <Text tag="p" size="h6" className={styles.text}>
                        Фундаменталисты
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Рационалы
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Логики
                </Text>

                <Text tag="span" size="large" color="accent" className={styles.text}>
                    Эмотивисты
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" className={styles.earthText}>
                Получение результата, наград, оплата.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Заняты сохранением материальных основ социума. Они являются его опорой. Фундаментом на котором строятся любые социальные конструкты.
            </Text>

            <Text tag="p" className={styles.text}>
                Приземленность и основательность позволяет им не улетать в иллюзии и не строить воздушных замков.
            </Text>

            <Text tag="p" className={styles.text}>
                Они очень практичны и расчетливы в своей деятельности. Копеечка к копеечке, денарий к денарию накапливают благосостояние и строят здание собственного успеха.
            </Text>

            <Text tag="p" className={styles.text}>
                Если посохи выступают в социуме хранителями идеологии, то пентакли занимаются сохранением материальных ценностей, обеспечивая передачу этих ценностей из поколения в поколения.
            </Text>

            <Text tag="p" className={styles.text}>
                Тем самым поддерживая линию социальной преемственности.
            </Text>

            <Text tag="p" className={styles.text}>
                Хранят и учитывают эти ценности, не позволяя им быть растраченными впустую. Они являют собой вечный фундамент этого мира.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Оберегая и накапливая ресурсы, постоянно поддерживая баланс вечной человеческой бухгалтерии.
            </Text>

            <Text tag="p" className={styles.text}>
                В надежных архивах сохраняя и накапливая знания и информацию об этом мире, создавая и наращивая общечеловеческую библиотеку.
            </Text>

            <Text tag="p" className={styles.text}>
                Опора на сильную консервативную логику (первая функция), позволяет им упорядочивать и сохранять накопленное благосостояние. При этом они нацелены на сохранение наиболее ценных объектов.
            </Text>

            <Text tag="p" className={styles.text}>
                А вот какие конкретно объекты имеют в этом социуме наибольшую ценность, это им сообщается извне по четвертой функции в форме отношения.
            </Text>

            <Text tag="p" className={styles.text}>
                Сами считают, что эти ценности не относительные (имеющие ценность только в этой социальной среде), а абсолютные и вечные.
            </Text>

            <Text tag="p" className={styles.text}>
                Что позволяет им сконцентрироваться на сохранении этих «наиболее ценных» благ.
            </Text>

            <hr />

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENTJ" className={styles.sociotype} />
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