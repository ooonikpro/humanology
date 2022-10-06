import styles from '../MindsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';
import { PageBreak } from '../../../components/PageBreak';

export default function Holographic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Голографическое</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Биоинформер</AuthorLine>
            <Icon name="Holographic" size={{ width: 320, height: 180 }} className={styles.image} />
            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Периодическая смена ракурса, точки рассмотрения. Мышление аналитическое, негативное, индуктивное.
            </Text>

            <Text tag="p" className={styles.text}>
                Как статики голографисты достигают хорошей четкости мысли, как негативисты периодически поворачивают предмет мысли противоположной стороной, и как инволюторы скачкообразно меняют ракурс — угол рассмотрения или критерий суждения.
            </Text>

            <Text tag="p" className={styles.text}>
                Как в видеоклипах. Со стороны - мерцание, исчезание какой-то мысли и возврат к ней.
                Плавности переходов между ракурсами нет, и не надо.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Эта интеллектуальная техника имеет много общего с голографическим принципом в физике.
                Голографическое мышление обслуживают следующие грамматические связки: «или — или», «либо-либо», «с одной стороны, с другой стороны». Оно активно использует принцип меню, свободного выбора точки зрения.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Голограмма (оптическая) — это статически зафиксированная картина интерференции двух лучей света — опорного и отраженного, идущих от одного источника. Голографическая техника позволяет получить объемное изображение предмета. Сама голограмма представляет собой совокупность полос и пятен, никак не похожую на запечатленный предмет.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                <i>В ней оказываются наложенными друг на друга два отдельных луча света, причем это происходит так, что каждая часть голограммы несет информацию обо всем объеме. Таким образом, за счет мысленного наложения нескольких проекций одного и того же объекта голографисты достигают эффекта объемности. Для этого они смотрят сквозь изображение и подбирают нужную дистанцию рассматривания.</i>
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Людям, с последовательной логикой, может быть сложно понимать параллельных логиков.
            </Text>

            <Text tag="p" className={styles.text}>
                Голографическая аппроксимация — это последовательное приближение к цели или удаление от нее, сопровождаемое сменой ракурсов. В процессе голографирования осуществляется как бы наводка на резкость.
            </Text>

            <Text tag="p" className={styles.text}>
                Имеет характерный скелетно-схватывающий, проницающий, «рентгеновский» характер. Оно без сожаления отсекает подробности, оттенки. Дает общее, весьма свернутое представление о предмете.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>Возьмите для примера два ортогональных сечения цилиндра. Горизонтальное сечение выглядит как круг, а вертикальное — как прямоугольник. Два разных проявления единого при их совмещении в уме дают переход на более высокий логический уровень понимания предмета.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Так мыслит <mark className={styles.fire}>Лидер</mark> в бою. Анализируя ситуацию, он упрощает ее до двух-трех проекций (фронтальной, с фланга, с тыла), но зато быстро выходит на более высокий уровень понимания.
            </Text>

            <Text tag="p" className={styles.text}>
                <mark className={styles.air}>Аналитик</mark> выпукло схватывает проблему с альтернативных сторон, мысленно поворачивая ситуацию вокруг ее смысловых осей.
            </Text>
            <Text tag="p" className={styles.text}>
                <mark className={styles.earth}>Хранитель</mark>, то приближая, то удаляя человека, как бы прощупывает его с разных сторон, отсекая людей, которые его могут подвести.
            </Text>
            <Text tag="p" className={styles.text}>
                <mark className={styles.water}>Советчик</mark> улавливает скрытые, альтернативные побуждения человека, как бы строит его психологическую «голограмму».
            </Text>

            <hr />
            <Text tag="p" className={styles.text}>
                Основные преимущества голографического мышления таковы.
            </Text>
            <Text tag="p" className={styles.text}>
                Во-первых, многоракурсность. За счет этого, как уже говорилось, достигается выпуклость, полнота описания, холистичность. Во-вторых, оно ценит простоту и четкость. Избегает вычурности, «наворотов».
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Особенно эффективны голографисты в кризисных ситуациях, когда надо быстро принимать решение и нет времени на взвешивание всех деталей.
            </Text>

            <hr />
            <Text tag="p" className={styles.text}>
                Явный недостаток этого стиля мышления в том, что оно слишком грубое, не уделяет должного внимания подробностям, которые становятся значимыми, когда процесс протекает ровно.
            </Text>
            <Text tag="p" size="h6" className={styles.text}>
                Его информационные продукты трудно распаковывать. Посторонним кажется, что в них отсутствуют промежуточные звенья, которые должны обеспечивать связность.
            </Text>

            <Text tag="p" className={styles.text}>
                <i>По Аристотелю, голографическое мышление соответствует объяснению при помощи структурных, или формообразующих причин. Аристотель называл структуру формой. Если вернуться к его примеру со скульптором, то причиной скульптуры оказывается скрытая в ней форма, которую скульптор всего лишь освобождает, отсекая лишние куски мрамора.</i>
            </Text>

            <Text tag="p" className={styles.text}>
                Если детерминисты объясняют поведение системы через составные части и связи между ними, то голографисты находят в ней новые качества, которые описываются дополнительными комбинаторными признаками, никак не вытекающими из ее внутренней структуры.
            </Text>

            <PageBreak>Голографисты</PageBreak>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('INTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="INTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ENFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ENFP" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div >
    );
}