import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Mirror() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Mirror' back>Зеркальные</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>
            <div className={styles.intertypeIcons}>
                <Icon name="Mirror" size={128} className={styles.intertypeIcon} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>
            <Text tag="p" size="h5" className={styles.intertypeText}>
                Уважение
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Вы воспринимаете своего партнера очень похожим на вас, но при этом «перевернутым» способом.
            </Text>
            <Text tag="p" size="large" color="accent" className={styles.text}>
                <i>Если брать отношения в квадре, то зеркальные будут самыми неблагоприятными, при этом если рассматривать все виды отношений между типами, то зеркальные отношения будут где-то посерединке.</i>
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Можно сказать, что ваш «зеркальщик» одновременно и очень похож на вас, и совсем не похож.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                Отсюда идет и сильный интерес к нему, и недопонимание во многих вопросах.
            </Text>
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Если общение между «зеркальщиками» идет по сильным сторонам их типов, то часто возникают полезные для обоих сторон дискуссии. «Зеркальщики» склонны критиковать друг друга, причем чаще всего критика бывает конструктивной.
            </Text>
            <Text tag="p" size="large" className={styles.text}>
                У представителей зеркальных типов всегда найдутся темы для обсуждения, поскольку, с одной стороны, два человека мыслят похоже и имеют общие ценности, а с другой, их взгляды сильно отличаются, и для того, чтобы увидеть полную картину, стоит услышать второе мнение.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                От партнера — «зеркальщика» не стоит ждать утешений.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Вместо жалости, он может лишь направить вас и мотивировать на дальнейшую работу. Зеркальные отношения нежелательныдля брака, поскольку в них присутствует конфликт рациональности одного партнера и иррациональности второго.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Теплое откровенное общение, доверие, успокоение, поддержка и придание уверенности, корректировка планов и действий.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Поучения, придирки, раздражительность, нахальная грубость, мстительность.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Доверчивость</Text>
                <Text tag="li" size="h6">Поучение</Text>
                <Text tag="li" size="h6">Отчужденность</Text>
            </Text>

            <EndPoint />
        </div>
    );

}
