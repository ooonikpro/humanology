import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Link } from 'react-router-dom';
import { PageBreak } from '../../../components/PageBreak';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Stubborn() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Stubborn' back>Упрямые</PageTitle>

            <AuthorLine text='Читать 6 минут' iconName='Time'>Екатерина Филатова</AuthorLine>

            <Text tag="p" size="h6" className={styles.text}>
                В непонятных ситуациях сохраняют свою привычную позицию.
            </Text>

            <Text tag="p" className={styles.text}>
                Проявления слабости к внешнему окружению не стесняются проявить.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                При вторжении в сферу его интересов, защищается, с достаточно резкой реакцией.
            </Text>

            <Text tag="p" className={styles.text}>
                В своем окружение чувствуют постоянную необходимость к эмоционально насыщенному образу жизни.
            </Text>

            <Text tag="p" className={styles.text}>
                Легко вкладывает свои ресурсы, чтобы реализовать свои идеи, или замыслы.
            </Text>

            <Text tag="p" className={styles.text}>
                Могут напасть первыми, но осознав превосходство сил, отступают.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Слабосигнальная логика
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Внимание к деталям, подробным описаниям. Стараясь не упустить мелочи, порой слабо структурируют и выделяют главную идею.
            </Text>

            <Text tag="p" className={styles.text}>
                Внимательны к мелким деталям в логических цепочках, точных связках, в мелочах. Любят усовершенствовать законы дополнительными инструкциями, и в то же время могут не увидеть глобальную бесхозяйственность и разруху, избегая ответственности и принятия крупномасштабных решений.
            </Text>

            <Text tag="p" className={styles.text}>
                Даже имея диктаторские замашки, склонны делить с другими ответственность в наиболее важных вопросах — «продавят» все решения, а принять на себя ответственность за них — заставят своих заместителей.
            </Text>

            <Text tag="p" className={styles.text}>
                Упрямые, конфликтные, бескомпромиссные в мелочах, они обычно уступчивы в принципиальных вопросах, предпочитают начинать работу не со сложных, а с более простых и очевидных, даже второстепенных вопросов (логическая слабосигнальность).
            </Text>

            <Text tag="p" className={styles.text}>
                «Упрямый» учёный может написать детализированный труд, отслеживающий различные версии возможных логических возражений. Но главное в нем может утонуть в куче второстепенных мелочей.
            </Text>

            <Text tag="p" className={styles.text}>
                Они легко и быстро включаются в движение и в работу (моторная возбудимость). С ними реже чем с «уступчивыми», случается, чтобы при письме они пропускали в словах буквы или целые слоги. В отличии от уступчивых, всегда заранее знают предстоящее окончание фразы.
            </Text>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Сильносигнальная этика
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Нужны сильные эмоциональные стимулы, стремление к короткой дистанции общения, любят ситуации эмоционального вызова.
            </Text>

            <Text tag="p" className={styles.text}>
                В силу стремления к сильным эмоциональным стимулам охотно подхватывают и усиливают эмоции окружающих. Любят, когда много смеха и веселья вокруг. Во время работы любят слушать музыку.
            </Text>

            <Text tag="p" className={styles.text}>
                В разговоре часто меняют громкость своего голоса, бывает, разговаривают на повышенных тонах, легко возбуждается при эмоциональных событиях. <mark className={styles.air}>Аналитик</mark> и <mark className={styles.earth}>Инспектор</mark> становятся трибунами и ораторами.
            </Text>

            <Text tag="p" className={styles.text}>
                Чувство вины для них нетипично. Для изменения своей этической точки зрения требуют сильных и обильных этических аргументов.
            </Text>

            <Text tag="p" className={styles.text}>
                Стремятся устанавливать короткую дистанцию эмоционального общения, с максимальным эмоциональным сближением. Любят, когда ситуация бросает им эмоциональный вызов, в ответ охотно наращивают уровень эмоционального возбуждения. Тяготеют к установлению тайной власти.
            </Text>

            <Text tag="p" className={styles.text}>
                Решение в эмоциональном отношении желательно быть вызывающим или шокирующим, к тому же эмоционально обязательным и универсальным для всех.
            </Text>

            <Text tag="p" className={styles.text}>
                Стремятся к всеохватывающей жизненной унификации своих подчиненных, к их полной для себя эмоциональной ясности, а также к эпической героически-военной масштабности своих великодержавных проектов.
            </Text>

            <PageBreak iconName='Stubborn'>Упрямые</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFJ" className={styles.sociotype} />
                </Link>
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

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTP" className={styles.sociotype} />
                </Link>
            </div>
        </div>
    );
}