import styles from '../FunctionsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_BLOCKS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function Back() {

    return (
        <div className={styles.root}>
            <PageTitle iconName='FunctionBack' back>Фоновая функция</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Евгений Шепетько</AuthorLine>
            <Icon name="BackExample" size={{ width: 256, height: 60 }} color="white" className={styles.function} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Фоновая
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Пристройки
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Ментальная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Внеценностная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сильная
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Тепимость
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Соучастие
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Инициатива
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Сентиментальность
                </Text>
            </div>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Отслеживает по фоновой функции всю информацию, способен запомнить очень многое, но не видит смысла делиться этими очевидными истинами.
            </Text>

            <Text tag="p" className={styles.text}>
                Самая цивилизованная функция.
            </Text>

            <Text tag="p" className={styles.text}>
                С её помощью, которая всегда работает фоном (отсюда и название), отслеживается вся информация по аспекту.
            </Text>

            <Text tag="p" className={styles.text}>
                Эта информация вряд ли будет будоражить представителя ТИМа, но она определенно поможет ему адекватно оценить любую ситуацию.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Фоновая функция реалистична, она не питает иллюзий, при этом она оценивает все детали, поскольку её четырехмерность это позволяет.
            </Text>

            <Text tag="p" className={styles.text}>
                Включается фоновая функция только в кризисных ситуациях, когда наступает риск, что все закончится не так, как начиналось.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Соучастие в проявлениях партнеров так, чтобы не задевать болезненно чьих-нибудь интересов.
            </Text>

            <Text tag="p" className={styles.text}>
                Тип корректирует себя обратной реакцией. Может взять на себя инициативу, если чувствует запрос окружающих.
            </Text>

            <Text tag="p" className={styles.text}>
                Если мнение окружающих различается, стремится проявиться индивидуально. Терпимость.
            </Text>

            <Text tag="p" className={styles.text}>
                Может хладнокровно выдержать удар в сложной ситуации.
            </Text>

            <Text tag="p" className={styles.text}>
                Человек сам подчиняется по этой функции.
            </Text>

            <Text tag="p" className={styles.text}>
                По этой функции человек сам способен учесть мнение другого, при этом не забывая своего. Если нападки на третье лицо, тип защищает его.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Главное качество — не высказывать отрицательных оценок вслух.
            </Text>

            <PageBreak>Входит в блок функций</PageBreak>

            <Text tag="p" className={styles.text}>
                Фоновую функцию не стоит рассматривать отдельно от функции защиты — блок Айди.
            </Text>

            {
                DETAIL_CARD_BLOCKS.slice(1, 2).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}