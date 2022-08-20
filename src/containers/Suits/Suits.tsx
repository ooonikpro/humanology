import React from 'react';
import styles from './Suits.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { TextInline } from '../../components/TextInline';
import { getIconName } from '../../components/Icon';
import { Humanology } from '../../types';
import { useColorRole } from '../../hooks';
import { SuitCard, Props as SuitCardProps } from '../../components/SuitCard';
import { DATA_ROLES, DATA_SUITS } from './data';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/constants/routes';

type CardRoleProps<K extends string, T> = {
    [key in K]: T;
} & Omit<SuitCardProps, 'icon' | 'color' | 'style'>;

const CardRole: React.FC<CardRoleProps<'role', Humanology.Role>> = ({
    role,
    ...otherProps
}) => {
    const { color } = useColorRole(role);

    return (
        <SuitCard
            style={color}
            color="role"
            icon={getIconName(role)}
            {...otherProps}
        />
    );
};

const CardTarot: React.FC<CardRoleProps<'tarot', Humanology.Tarot>> = ({
    tarot,
    ...otherProps
}) => {
    return (
        <SuitCard color="accent" icon={getIconName(tarot)} {...otherProps} />
    );
};

export default function Suits() {
    const navigate = useNavigate();

    const goToSuitsCard = (cardName: Humanology.Role) => () => navigate(ROUTES.SUITS_CARD(cardName));
    const goToSuitsTarot = (tarotName: Humanology.Tarot) => () => navigate(ROUTES.SUITS_TAROT(tarotName));

    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h3" size="h3" className={styles.title}>
                    Карты и масти
                </Text>

                <Text tag="p" className={styles.text}>
                    Авторы этой идеи, Ирина и Сергей Савченко обратили внимание
                    на определенную близость описаний соционических типов и
                    персонажей квадрата Придворных карт колоды Таро.
                </Text>

                <hr />

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Карты
                </Text>

                <Text tag="p" className={styles.text}>
                    Группы стимулов к деятельности. У каждой группы типов,
                    составленной таким образом, свои движущие мотивы, которые
                    кажутся достойными внимания, заставляют проявлять
                    активность.
                </Text>

                <TextInline>
                    <Text size="h6" color="grey">
                        Интроверт
                    </Text>
                    <hr />
                    <Text size="h6" color="grey">
                        Экстраверт
                    </Text>
                </TextInline>

                <TextInline>
                    <Text size="h6" color="grey">
                        Интуит
                    </Text>
                    <hr />
                    <Text size="h6" color="grey">
                        Сенсорик
                    </Text>
                </TextInline>

                <TextInline>
                    <Text size="h6" color="grey">
                        Предусмотрительный
                    </Text>
                    <hr />
                    <Text size="h6" color="grey">
                        Беспечный
                    </Text>
                </TextInline>

                <hr />

                <Text tag="p" size="h6" color="accent" className={styles.text}>
                    Масти
                </Text>
                <Text tag="p" className={styles.text}>
                    Группируются немного по другим признакам.
                </Text>

                <TextInline>
                    <Text size="h6" color="grey">
                        Логик
                    </Text>
                    <hr />
                    <Text size="h6" color="grey">
                        Этик
                    </Text>
                </TextInline>

                <TextInline>
                    <Text size="h6" color="grey">
                        Иррационал
                    </Text>
                    <hr />
                    <Text size="h6" color="grey">
                        Рационал
                    </Text>
                </TextInline>

                <TextInline>
                    <Text size="h6" color="grey">
                        Эмотивист
                    </Text>
                    <hr />
                    <Text size="h6" color="grey">
                        Конструктивист
                    </Text>
                </TextInline>
            </WhiteCard>

            <WhiteCard color="biege">
                <Text tag="h3" size="h3">
                    Карты
                </Text>
            </WhiteCard>

            {DATA_ROLES.map((role, $i) => {
                return <CardRole {...role} key={$i} onClick={goToSuitsCard(role.role)} />;
            })}

            <WhiteCard color="biege">
                <Text tag="h3" size="h3">
                    Масти
                </Text>
            </WhiteCard>

            {DATA_SUITS.map((tarot, $t) => {
                return <CardTarot {...tarot} key={$t} onClick={goToSuitsTarot(tarot.tarot)} />;
            })}
        </div>
    );
}
