import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Beneficiary() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Beneficiary' back>Заказчик</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsYellow}>
                <Icon name="Beneficiary" size={128} className={styles.intertypeIconYellow} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextYellow}>
                Выполнение потребностей, бессмысленность
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Нейтральные отношения, которые несимметричны по своей сути. Подзаказный решает задачи, которые ставит заказчик, при этом реализуя себя.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Первый партнер в отношениях называется заказчиком, а второй – подзаказным.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Отношения социального заказа образуют закрытое кольцо в соционе. Каждый ТИМ имеет своего заказчика и своего подзаказного. Именно отношения социального заказа являются основными для прогресса, поскольку в них раскрываются творческие возможности людей.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                В отношениях социального заказа партнер-заказчик смотрит на партнера-подзаказного сверху вниз, недооценивая его возможности.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Подзаказный, наоборот, восхищается заказчиком, переоценивая его положительные качества. Находясь в обществе заказчика, подзаказный начинает перед ним заискивать, пытается вызвать в заказчике интерес, ведет себя нестандартно относительно обычной жизни. Со стороны это выглядит так, будто подзаказный оправдывается перед заказчиком. На самом деле, комплимент подзаказному от заказчика намного ценней, чем комплимент от любого другого человека.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Отношения социального заказа чаще всего инициирует заказчик. Подзаказный партнер видит, что заказчик к нему расположен, поэтому старается понравится, произвести впечатление. Когда ему удается, заказчик поощряет подзаказного, поддерживает его.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Но такая идиллия существует только в первые моменты отношений, а в дальнейшем заказчик перестает слышать подзаказного, из-за чего он расстраивается и старается в дальнейшем держаться на расстоянии.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Подзаказному сложно закончить отношения с заказчиком.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Он чувствует в этом случае потерю важного источника информации, интересного собеседника и полезного человека. Поэтому, если заказчик желает продолжать отношения, велика вероятность, что подзаказный никуда не денется. Это можно заметить в браках, когда явно несчастливые люди живут вместе десятилетиями, не имея возможности развестись и строить каждый свою жизнь.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Нельзя сказать, что отношения заказа – это конфликтные отношения. Скорее, это отношения утомляющих ссор из-за ничего.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В этих отношениях нет громких скандалов и желания уйти, но они окрашены перманентным недовольством друг другом, которое можно контролировать: в этом случае отношения будут стабильными и неплохими. Иначе же, в паре с отношениями заказа будут постоянные ссоры по мелочам.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Интересное наблюдение: пары, которые часто ссорятся на пустом месте, несколько раз расстаются, а потом опять начинают жить вместе, чаще всего собой иллюстрируют отношения социального заказа.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Чтобы отношения социального заказа не приводили к постоянным упрекам, стоит соблюдать несколько правил.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Не подводите друг друга.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Необходимо выполнять все обещания, соблюдать договоренности, предупреждать заранее о неординарных ситуациях.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Помогайте друг другу.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Заказчик должен проявлять уважение к подзаказному, показывать своё хорошее отношение, говорить слова поддержки, а подзаказному не стоит драматизировать события и не высказывать все в лицо заказчику.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Сотрудничайте.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В отношениях социального заказа партнерам стоит обмениваться информацией, учиться друг у друга, благодарить друг друга за помощь. Такие отношения подходят для работы и для обмена опытом.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Приятная притягательная сила, активация, расширение интересов, ощущение значимости, опека, преданность партнера, удовлетворение потребностей, направление активности, помощь, раскрытие потенциала.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Неадекватная оценка партнера, недовольство, агрессивность, переутомление, раздражение, высокомерие, прихоти, предвзятость и завышенные требования, игнорирование, пренебрежение, эгоизм.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Угодливость</Text>
                <Text tag="li" size="h6">Снисходительность</Text>
                <Text tag="li" size="h6">Неопределенность</Text>
            </Text>

            <EndPoint />
        </div>
    );
}
