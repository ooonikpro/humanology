import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from '../History.module.scss';
import { BlockLink } from '../../../components/BlockLink';

export default function Aushra() {
    return (
        <>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>

            <div className={styles.person}>
                <img src={require('../../../assets/history/aushra.png')} alt="Аушра Аугустинавичюте" className={styles.userpic} />
                <span className={styles.text}>
                    <Text tag="h2" size="h5" color="accent" className={styles.name}>Аушра <br />Аугустинавичюте</Text>
                    <Text tag="p" size="body" color="grey" className={styles.date}>1928 — 2005, Вильнюс</Text>
                </span>
            </div>

            <Text tag="p" size="h4" font="additional" color="accent" className={styles.text}>
                На задворках империи…
            </Text>


            <Text tag="p" className={styles.text}>
                Основоположница соционики — концепции типов личности и взаимоотношений между ними, основанной на типологии известного швейцарского психолога К. Г. Юнга и теории информационного метаболизма А. Кемпинского.
            </Text>

            <Text tag="p" className={styles.text}>
                В конце 60-х — начале 70-х годов познакомилась с типологией Юнга, теорией психоанализа Зигмунда Фрейда и теорией информационного метаболизма Антона Кемпинского на основе которых вместе с единомышленниками разработала теорию соционики.
            </Text>

            <Text tag="p" className={styles.text}>
                Сама Аугустинавичюте датой рождения соционики называла 1968 год, в котором она поняла, как можно расширить концепцию Юнга и построить 8-компонентную модель психики (модель А).
            </Text>

            <Text tag="p" className={styles.text}>
                Позднее, в середине 1980-х годов, прочитав переведённую на русский язык книгу Б. Шнейдермана «Психология программирования: Человеческие факторы в вычислительных и информационных системах», узнала о существовании типологии Майерс-Бриггс и написала комментарий к тесту Майерс-Бриггс, обратив внимание на необходимость создания соционических тестов для диагностики типа информационного метаболизма.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Цитата из книги «О дуальной природе человека»:
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Рождается новая наука соционика, наука о шестнадцатитипной природе людей и о закономерностях отношений между ними.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Люди всегда мечтали жить в хороших отношениях с другими людьми, мечтали быть понятыми и хотели понимать других.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Хотели видеть кругом доброжелательность и сами быть доброжелательными. Мечтали все, удавалось немногим.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Сегодня мы знаем, что нельзя мечтать о по-настоящему гармоничной, мирной и творческой жизни общества и скрытых за своими типами закономерностей общения.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Совершенно новым этапом в жизни общества будет такая его реорганизация, которая каждом человеку предоставит возможность для достаточного количества контактов с нужными для его психосоматического здоровья людьми.
            </Text>

            <hr />

            <Text tag="p" className={styles.text}>
                Цитата из книги «Социон»:
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Человеческий мозг, отражая внешний и внутренний мир индивидуума, обслуживает не только его самого, но и общество.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Для удовлетворения своих нужд человеку необходимо представление о всей окружающей его действительности.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                В обслуживании социума люди кооперируются: обществу передаются представления индивида лишь о некоторых аспектах его действительности.
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                Механизм этого явления,по нашим сегодняшним представлениям, достаточно прост: отдельные аспекты действительности отражаются в мозгу человека с разной степенью дифференциации и осознанности.
            </Text>

            <hr />

            <div className={styles.linkblock}>
                <BlockLink path="/history/grigoriy" label="Дальше: Григорий Рейнин" icon="ArrowRightSquare" />
            </div>
        </>
    );
}
