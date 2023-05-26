import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Semidual() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Semidual' back>Полудуальные</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsGreen}>
                <Icon name="Semidual" size={128} className={styles.intertypeIconGreen} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextGreen}>
                Поддержка, оценка
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Комфортные отношения неполного дополнения партнеров. Партнеры быстро находят общий язык, возникает взаимный интерес и симпатия.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Полудуалы» прекрасно понимают устремления друг друга и готовы поддержать их. Партнëрам интересно друг с другом, беседы не утомляют, а, наоборот, дарят хорошее настроение.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                При этом иногда могут возникать ссоры на пустом месте, которые партнеры преодолевают и продолжают тесное общение.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Полудуальные отношения поддерживают партнеров в работоспособном состоянии, не дают до конца расслабиться. Радость понимания часто сменяется разочарованием, но, в целом, отношения приятные и комфортные.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                «Полудуалы» общаются друг с другом без эмоциональных всплесков, и отношения очень укрепляет совместный труд.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Вместе партнеры могут горы свернуть, поскольку в паре есть понимание и желание достичь общих целей. При том, что партнеры постоянно советуются, каждый делает свою часть работы, не мешая другому.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Полудуальные отношения помогают людям развиваться, узнавать новую информацию, разбираться в сложных проблемах.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Но при этом, зона уверенности одного из партнеров попадает на самую слабую зону второго, из-за чего неосознанно можно нанести друг другу обиду.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Увлеченное общение при многообразии тем, легкое налаживание контакта, уверенность, повышение тонуса и работоспособности, защита и поддержка в начинаниях.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Резкие и непонятные ссоры, индивидуализм, эгоизм, упрямство, споры, несогласованность, упреки.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>
            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Азарт</Text>
                <Text tag="li" size="h6">Подавление</Text>
                <Text tag="li" size="h6">Разногласия</Text>
            </Text>

            <EndPoint />
        </div >
    );

}
