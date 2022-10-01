import styles from '../BlocksItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { PageBreak } from '../../../components/PageBreak';
import { EndPoint } from '../../../components/EndPoint';
import { DETAIL_CARD_FUNCTIONS } from '../../../constants/detailCard';
import { DetailCard } from '../../../components/DetailCard';

export default function SuperEgo() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Блок Суперэго</PageTitle>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Татьяна Прокофьева</AuthorLine>
            <Icon name="BlockSuperEgo" size={{ width: 320, height: 80 }} color="white" className={styles.block} />

            <Text tag="b" size="h4" color="black" className={styles.text}>
                Блок Суперэго
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Блок социальной адаптации
            </Text>

            <div className={styles.tags}>
                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Родитель - подросток
                </Text>

                <Text tag="span" size="large" color="grey" className={styles.text}>
                    Надо
                </Text>
            </div>

            <Text tag="p" className={styles.text}>
                Особенностью этого блока является то, что воздействие по нему является весьма дискомфортным, так как с одной стороны, человек знает о своей слабости в этих областях, с другой из-за осознанности этих функций понимает, что необходимо как-то отреагировать, однако длительная работа по функциям блока Суперэго весьма затруднительна.
            </Text>

            <Text tag="p" className={styles.text}>
                Родители бывают разные, в данном случае это тот, который говорит, как себя надо вести, какие социальные нормы есть на тот или иной счет, что одобряемо, что не одобряемо.
            </Text>

            <Text tag="p" className={styles.text}>
                Вот тут «ай-ай-ай», а тут «молодец». Не обязательно жесткий, может быть и вполне «дружелюбно» настроенный.
            </Text>

            <Text tag="p" className={styles.text}>
                Тем не менее, именно тот, кто знает социальные нормы, социальный уровень, знает как надо.
            </Text>


            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Функция блока — избегание неудач.
            </Text>

            <Text tag="p" className={styles.text}>
                Где мы легче всего можем проколоться? Где себе подстелить соломки, где проконсультироваться, где заранее подготовится, создать «запасные аэродромы» и так далее. Это то, что прикрыть.
            </Text>

            <Text tag="p" className={styles.text}>
                Функции блока обладают с одной стороны моментом болезненности, с другой — чувствительности. Как только начинаешь делать что-то не то, на уровне Суперэго тут же чувствуешь — «Ага, надо бы полшага назад».
            </Text>

            <PageBreak>Задачи блока</PageBreak>

            <Text tag="ul" className={styles.list}>
                <Text tag="li">
                    Презентация результатов. Показать людям, оформить, подать товар лицом.
                </Text>
                <Text tag="li">
                    Выступление перед аудиторией, самопрезентация.
                </Text>
                <Text tag="li">
                    Имидж. То, почему мы будем приняты или отторгнуты. Как мы являем себя. Как себя показываем.
                </Text>
                <Text tag="li">
                    Выживание в непривычных условиях. Когда условия меняются, требуется к ним адаптироваться, узнать, а как оно здесь.
                </Text>
            </Text>

            <PageBreak>Функции блока</PageBreak>
            {
                DETAIL_CARD_FUNCTIONS.slice(2, 4).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} />)
            }

            <EndPoint />
        </div>
    );
}