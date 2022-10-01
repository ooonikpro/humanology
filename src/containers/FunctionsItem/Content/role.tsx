import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Role() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionRole' back>Ролевая функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="RoleExample" size={{ width: 128, height: 60 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Ролевая
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Нормативная
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ментальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Внеценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Слабая
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Адекватность
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Спокойствие
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Гармония
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сентиментальность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Когда надо «сыграть роль». Хочется демонстрировать.
            </Text>

            <Text tag="p" className={styles.text}>
                Стремление к адекватности в отношении с окружающим, к соответствию общественным нормам и стандартам, быть не хуже большинства.
            </Text>

            <Text tag="p" className={styles.text}>
                Если окружающие активны, то активен и тип. Эта функция синтетична и стремится учесть желание всех и никому не мешать.
            </Text>

            <Text tag="p" className={styles.text}>
                Она не демонстративна, не свободна, тип нуждается в определённости и ясности по этой функции.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Критика здесь воспринимается плохо, поэтому сами критикуют окружающих очень осторожно, не навязывая своего мнения.
            </Text>

            <Text tag="p" className={styles.text}>
                У каждого типа есть свои представлении о том, каким надо казаться и быть.
            </Text>

            <Text tag="p" className={styles.text}>
                Очень часто бывает ситуация, когда человек постоянно работает по ролевой функции, играет некую роль, красуется, а потом жалуется близким, мол, никто не ценит меня истинного и никто не понимает, кто я такой.
            </Text>

            <Text tag="p" className={styles.text}>
                Ролевая функция требует очень много сил и отдачи. Так, если постоянно играть на публику, то к концу вечера можно почувствовать себя опустошенным и потерянным.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Имеет ряд шаблонов «как нужно делать», но не умеет действовать в моменте.
            </Text>

            <Text tag="p" className={styles.text}>
                Критика по ролевой функции вызывает обиды, при этом, человек не хочет учиться по ней работать: есть гораздо более интересные вещи.
            </Text>


            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Ролевую функцию не стоит рассматривать отдельно от болевой — блок Суперэго.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(2, 3).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}