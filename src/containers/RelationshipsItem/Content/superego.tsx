import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';

export default function Superego() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Superego' back>Суперэго</PageTitle>

            <AuthorLine text='Читать 4 минуты' iconName='Time'>О соционике</AuthorLine>

            <div className={styles.intertypeIconsPink}>
                <Icon name="Superego" size={128} className={styles.intertypeIconPink} />
                <Icon name="IntertypeBg" size={160} className={styles.intertypeBg} />
            </div>

            <Text tag="p" size="h5" className={styles.intertypeTextPink}>
                Восхищение способностями, переутомление
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Один из самых ярких типов отношений между людьми.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Партнер-суперэго с первого взгляда притягивает внимание, вызывает уважение и восхищение, поскольку он умеет делать то, что не умеем мы, но чему очень хотим научиться.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В вопросах, где вам требуется много сил для решения, ваш партнер-суперэго плавает, как рыба в воде. Он быстро решает неразрешимые для вас трудности, даже не почувствовав усталости. Это вызывает легкую зависть и желание быть похожим на него.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Партнеры-суперэго уважают друг друга, интересуются друг другом, и при внутреннем любопытстве, внешне ведут себя довольно-таки прохладно и отчужденно.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                В отношениях суперэго нет глубокого интереса к личности партнера, и если люди не имеют общих интересов, то их общение носит формальный характер, и долго поддерживать такое общение достаточно сложно.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                На близкой дистанции в отношениях суперэго возникает еще одна проблема: на словах понимание достигнуто, но в деле создается ощущение, будто партнер хочет сделать все вам назло.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                На самом деле, это лишь восприятие и несоответствие ваших моделей, но именно из-за такого ощущения отношения суперэго достаточно сложно поддерживать.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Отношения суперэго имеют массу плюсов для партнеров, ведь эти отношения учат социальной адаптации, показывают, как нужно себя вести по тем функциям, которые у нас слабые.
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Благодаря партнеру-суперэго мы можем стать более устойчивыми к критике и оценке, и менее нуждающимися в «защитнике» наших слабых функций.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Ключевые слова
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Расположение, взаимоуважение, восхищение манерами и поведением, интересный обмен мыслями, быстрое решение вопросов, желание высказать собственную точку зрения и возбудить к себе интерес, оказание конкретной помощи.
            </Text>

            <hr />

            <Text tag="b" size="large" color="accent" className={styles.text}>
                Проблемы и травмы
            </Text>

            <Text tag="p" size="large" className={styles.text}>
                Соперничество, непонимание, недоверие, необходимость подстраиваться, невольное причинение боли, трения, споры, ссоры, унижения, обиды, пустые обещания, желания отдалиться и не помогать, претензии в том, что партнер делает все назло, взимная глухота, отсутствие поддержки в делах, навязывание своей точки зрения, непонятность логики поведения, умалчивания о намерениях, критика, ощущение подвоха, острые конфликты, отчуждение.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Стадии развития отношений
            </Text>

            <Text tag="ul" className={styles.list}>
                <Text tag="li" size="h6">Самоценность</Text>
                <Text tag="li" size="h6">Подвох</Text>
                <Text tag="li" size="h6">Унижение</Text>
            </Text>

            <EndPoint />
        </div>
    );
}
