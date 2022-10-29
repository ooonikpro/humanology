import React from 'react';
import { Text } from '../../../components/Text';
import { Icon } from '../../../components/Icon';
import styles from '../Mentality.module.scss';
import { DetailCard } from '../../../components/DetailCard';
import { DETAIL_CARD_MINDS } from '../../../constants/detailCard';
import { BlockLink } from '../../../components/BlockLink';

export default function ISFJ() {
    return (
        <>
            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стимульная группа
            </Text>
            <Text tag="p" color="role" size="h6" className={styles.text}>
                Благосостояние
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Важными стимулами являются хорошее материальное положение, комфортные условия работы.
            </Text>

            <Text tag="p" className={styles.text}>
                При этом в работе для них важно постоянство — неизменный круг общения, постоянные, привычные обязанности. От своей работы они ждут стабильной заработной платы, уверенности в завтрашнем дне.
            </Text>

            <Text tag="p" className={styles.text}>
                За счет них формируется так называемый «средний класс».
            </Text>

            <Text tag="p" color="accent" className={styles.text}>
                <i>Еще Аристотель писал, что средний класс — основа стабильности любого общества. Если средний класс достаточно многочисленный и доволен своим материальным положением и жизнью в целом, такому обществу удаëтся избежать конфликтов и социальных потрясений.</i>
            </Text>

            <Text tag="p" color="grey" className={styles.text}>
                Читайте подробнее про дам
            </Text>

            <div className={styles.linkblock}>
                <BlockLink path="/suits/lady" label="Дамы" icon="Lady" />
            </div>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Темперамент
            </Text>
            <div className={styles.pair}>
                <Text tag="p" color="role" size="h6" className={styles.text}>
                    Флегматик
                </Text>
                <Icon name="Phlegmatic" size={{ width: 40, height: 16 }} color="earth" />
                <Text tag="span" size="body" color="grey" className={styles.text}>
                    Уравновешенно-стабильный
                </Text>
            </div>


            <Text tag="p" size="h6" className={styles.text}>
                Cпокойны как внешне, так и внутренне.
            </Text>

            <Text tag="p" className={styles.text}>
                Это самый уравновешенный из всех темпераментов. Интровертная рациональность делает их сдержанными и закрытыми, не отвлекающимися на внешние раздражающие факторы.
            </Text>

            <Text tag="p" className={styles.text}>
                Это вовсе не означает, что флегматик не способен вспылить. Просто, чтобы довести его до такого состояния, надо потратить много сил.
            </Text>

            <Text tag="p" className={styles.text}>
                Волевой выдержкой отличаются <mark className={styles.earth}>Инспектор</mark> и <mark className={styles.earth}>Хранитель</mark>, терпеливостью и покладистостью — <mark className={styles.air}>Аналитик</mark> и <mark className={styles.air}>Гуманист</mark>.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мышление
            </Text>

            {
                DETAIL_CARD_MINDS.slice(2, 3).map((item, $itemKey) => <DetailCard {...item} key={$itemKey} paragraphs />)
            }

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Стиль общения
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Душевный
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Женский стереотип коммуникабельности.
            </Text>

            <Text tag="p" className={styles.text}>
                В общении делятся с другими знаками душевной привязанности, выражают своё отношение к окружающим людям и явлениям.
            </Text>

            <Text tag="p" className={styles.text}>
                Общение душевных — пассивный поиск чувств. Они быстро и уверенно выбирают импонирующего партнёра, но не стремятся его завоевать, а показывают знаки симпатии и ожидают от него ответных действий. Также легко отзываются на активность объекта симпатии.
            </Text>

            <Text tag="p" className={styles.text}>
                Хорошо чувствуют состояние собеседника. Часто в разговоре становятся на его место, чтобы ощутить его мотивы и чувства. Их главный интерес заключается в том, чтобы уловить, как кто к кому относится. Они утешают и наставляют, осуществляют душевную поддержку и сочувствуют. И это наполняет содержанием их жизнь.
            </Text>

            <Text tag="p" className={styles.text}>
                В общении с ними осуществляется обмен знаками хорошего или плохого отношения. Говорить могут об опыте, о погоде - это вербально. А 80% невербально — «я тебя ненавижу» или «ты мне нравишься».
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Создают связи между людьми.
            </Text>

            <hr />

            <Text tag="span" size="body" color="grey" className={styles.text}>
                Мировоззрение
            </Text>
            <Text tag="p" color="accent" size="h6" className={styles.text}>
                Законопослушный добрый
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Верит в то, что можно достичь всеобщего добра, если все будут руководствоваться справедливыми законами.
            </Text>

            <Text tag="p" className={styles.text}>
                Он объединяет в себе готовность противостоять злу с решительностью держаться в этом до конца.
            </Text>

            <Text tag="p" className={styles.text}>
                Говорит правду, держит данное слово, помогает нуждающимся и борется с несправедливостью. Он верит, что зло должно быть наказано в соответствии с законом.
            </Text>

            <Text tag="p" className={styles.text}>
                Он может встать перед моральной дилеммой, когда ему приходится делать выбор между добром и законом. Например, если его религиозные убеждения противоречат местным законам.
            </Text>
        </>
    );
}
