import styles from '../ClubsPsychotype.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';
import { Icon } from '../../../components/Icon';
import { EndPoint } from '../../../components/EndPoint';
import { Link } from 'react-router-dom';
import { SocietyCardMini } from '../../../components/SocietyCardMini';
import { ROUTES } from '../../../constants/routes';

export default function Aggressor() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Aggressor' back>Агрессоры</PageTitle>
            <AuthorLine text='Читать 2 минуты' iconName='Time'>Интернет</AuthorLine>
            <div className={styles.psychotypeBlock}>
                <div>
                    <Icon name="Aggressor" size={96} className={styles.aggressorIcon} />
                </div>
                <div>
                    <Text tag="span" size="h4" className={styles.aggressorText}>
                        Агрессоры
                    </Text>
                </div>
            </div>

            <div className={styles.tags}>
                <Text tag="span" size="large" className={styles.text}>
                    Сенсорики
                </Text>

                <Text tag="span" size="large" className={styles.text}>
                    Решительные
                </Text>
            </div>

            <hr />

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Это не тот, кто кидается на каждого встречного, без разговора бьёт дубиной и тащит в кусты.
            </Text>

            <Text tag="p" className={styles.text}>
                Несмотря на столь грозное название, принадлежащие к данной группе, отнюдь не склонны проявлять немотивированную агрессию налево и направо хотя бы потому, что им это не нужно — они прекрасно чувствуют сильные и слабые стороны окружающих и понимают, где и как нужно надавить, чтобы добиться своего.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Властные люди, в отношениях играющие роль охотника, завоевателя. Предпочитают брать инициативу в свои руки.
            </Text>

            <Text tag="p" className={styles.text}>
                Стремятся «присвоить» партнёра, подчинить его, но при этом не любят, когда жертва сдаётся без сопротивления, которое только распаляет и заводит их, увеличивая их пыл.
            </Text>

            <Text tag="p" size="h6" color="accent" className={styles.text}>
                Для них спасать мир, в общем-то — единственная подходящая профессия.
            </Text>

            <Text tag="p" className={styles.text}>
                Ощущают прилив сил именно там, где все зависит именно от них, когда именно им нужно пойти и сделать то невозможно, на что никто не способен.
            </Text>

            <Text tag="p" className={styles.text}>
                Даже если падает, он всё равно поднимется, отряхнется и с новой силой пустится в бой.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Большие собственники: защищают каждый камень на своей территории, откусывая носы, а так же все остальные конечности всем любопытным.
            </Text>

            <Text tag="p" className={styles.text}>
                Агрессор не станет сюсюкаться, как это делают Заботливые.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Не станет заботится и нянчится, он не матрос корабля, а скорее командир: раздает указания, направляет на нужный курс.
            </Text>

            <Text tag="p" className={styles.text}>
                И в отношениях дает установку «Я хочу», а виктим подстраивается под неё или же бунтует, нарываясь таким образом. Сдерживаться при этом никогда не будет.
            </Text>

            <Text tag="p" size="h6" className={styles.text}>
                Очень часто проявляют надменность и неприязнь к человечески слабостям, пытаясь вызвать на прямое противостояние.
            </Text>

            <Text tag="p" className={styles.text}>
                Если вы чего-то не можете или что-то провалили, то вряд ли агрессор подойдет к вам утешать и обнимать — это вообще с ними делать травмоопасно, а скорей будут походить на злого полковника — упал-отжался, дальше работать.
            </Text>

            <hr />

            <div className={styles.aggressorBlock}>
                <div>
                    <Icon name="Male" size={40} className={styles.aggressorIcon} />
                    <Text tag="p" size="h6" className={styles.aggressorText}>
                        Мужчина-агрессор
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Имеет склонность к насильственному овладению женщиной. В любовной игре любит демонстрировать борьбу.
                </Text>

                <Text tag="p" className={styles.text}>
                    Может позволить себе грубость, иногда причиняет женщинам боль — как физическую, так и моральную.
                </Text>

                <Text tag="p" className={styles.text}>
                    Ожидает от женщины подчинения силе.
                </Text>
            </div>

            <hr />
            <div className={styles.aggressorBlock}>
                <div>
                    <Icon name="Male" size={40} className={styles.aggressorIcon} />
                    <Text tag="p" size="h6" className={styles.aggressorText}>
                        Женщина-агрессор
                    </Text>
                </div>

                <Text tag="p" size="h6" className={styles.text}>
                    Все время пытается соперничать с мужчиной, в том числе и в эротических отношениях. Склонна к иронии, насмешкам над противоположным полом.
                </Text>

                <Text tag="p" className={styles.text}>
                    Любит чувствовать себя более компетентной, чем мужчина в любом деле.
                </Text>

                <Text tag="p" className={styles.text}>
                    Во время любовной игры ожидает от мужчины заискивания, показной слабости, эмоциональной нестойкости.
                </Text>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISTJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISTJ" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESTP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESTP" className={styles.sociotype} />
                </Link>
            </div>

            <div className={styles.pairSociocards}>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ESFP')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ESFP" className={styles.sociotype} />
                </Link>
                <Link
                    to={`${ROUTES.SOCIOTYPES('ISFJ')}/card`}
                    className={styles.link} >
                    <SocietyCardMini id="ISFJ" className={styles.sociotype} />
                </Link>
            </div>

            <EndPoint />
        </div>
    );
}