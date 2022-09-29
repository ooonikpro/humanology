import styles from '../AspectsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Logic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='AspectLogic' back>Разум</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>

            <div className={styles.aspectMini}>
                <Text tag="p" size="large" color="black">Белая логика</Text>
                <Icon name='AspectLogicMini' size={24} />
            </div>

            <Icon name="AspectLogic" color="accent" size={108} className={styles.iconAspect} />

            <Text tag="b" size="h3" color="black">
                Разум
            </Text>

            <Text tag="p" size="h5" color="accent">
                Структурная логика
            </Text>

            <hr />

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Логичность
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Статус
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Система
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Классификация
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Закон
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Структура
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Вид
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Критерий
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Анализ
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    График
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сравнение
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Формула
                </Text>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Порядок
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Показывает соотношения между различными объектами, структуру объектов, возможность сравнения объектов, их классификацию, закономерности между объектами.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Смысл аспекта заключается в выделении объективных соотношений между различными объектами и их частями.
            </Text>

            <hr />

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Способность логически мыслить устанавливать логические связи, определять соотношения, анализировать.
                </Text>

                <Text tag="li">
                    Восприятие мира через соотношения различных объектов друг с другом, их сравнение, выбор главного.
                </Text>

                <Text tag="li">
                    Способность классифицировать всевозможные объекты, систематизация окружающего мира.
                </Text>

                <Text tag="li">
                    Оценка любой информации по тому, насколько она укладывается в различные системы.
                </Text>

                <Text tag="li">
                    Восприятие пространства как системы расстояний, восприятие своего места в социуме.
                </Text>
            </Text>

            <hr />

            <Text tag="b" size="h6" color="accent" className={styles.text}>
                Эксперты структурной логики
            </Text>
            <Text tag="p" size="body" className={styles.text}>
                Аспект находится на базовой функции
            </Text>

            <EndPoint />
        </div>
    );
}
