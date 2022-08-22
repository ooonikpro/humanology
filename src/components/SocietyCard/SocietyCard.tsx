import React from 'react';
import styles from './SocietyCard.module.scss';
import { Socionics } from '../../types';
import { QUADRAS } from '../../constants/natureElements';
import { MIND_KEY } from '../../constants/mindset';
import { ROLE } from '../../constants/role';
import { CLUBS } from '../../constants/clubs';
import { TAROT } from '../../constants/tarot';
import { GROUPS } from '../../constants/groups';
import { WhiteCard } from '../WhiteCard';
import { Tag } from '../Tag';
import { Text } from '../Text';
import { getIconName, Icon } from '../Icon';
import { CircleQuadra } from '../CircleQuadra';
import { Person } from '../Person';
import { YUNGS_DICHTOMIES } from 'src/constants/yungsDichotomies';

interface Props extends Socionics.IntertypeProp {
    id: Socionics.SocionicsType;
    mini?: boolean;
}

export const SocietyCard: React.FC<Props> = (props) => {
    const text = {
        id: props.id,
        element: QUADRAS[props.element],
        role: ROLE[props.role].label,
        mindKey: MIND_KEY[props.mindKey],
        name: props.name,
        alias: props.alias,
        club: CLUBS[props.club],
        tarot: TAROT[props.tarot],
        psychotype: GROUPS[props.psychotype],
        percentage: props.populationPercentage,
        yungs: props.yungs.map((item) => YUNGS_DICHTOMIES[item]),
    };

    const rootClasses = [styles.root, props.mini && styles.mini].join(' ');

    return (
        <WhiteCard className={rootClasses}>
            <div className={styles.header}>
                <div
                    className={[
                        styles.params,
                        props.mini && styles.inline,
                    ].join(' ')}
                >
                    <div className={styles['params-line']}>
                        <span className={styles.pair}>
                            <Tag sign={props.element} color='element' size={16}/>
                            <Text tag="p" color="element" size="small">
                                {text.element}
                            </Text>
                        </span>
                        <span className={styles.pair}>
                            <Tag sign={props.role} color='role' size={16}/>
                            <Text tag="p" color="role" size="small">
                                {text.role}
                            </Text>
                        </span>
                        <Text tag="p" size="small" color="accent">
                            {text.id}
                        </Text>
                        <Text tag="p" size="small" color="grey">
                            {text.alias}
                        </Text>
                    </div>

                    <div className={styles['params-line']}>
                        {!props.mini && (
                            <>
                                <span className={styles.pair}>
                                    <Tag sign={props.club} color='accent' size={16}/>
                                    <Text tag="p" color="accent" size="small">
                                        {text.club}
                                    </Text>
                                </span>
                                <span className={styles.pair}>
                                    <Tag sign={props.psychotype} color='accent' size={16}/>
                                    <Text tag="p" color="accent" size="small">
                                        {text.psychotype}
                                    </Text>
                                </span>
                                <span className={styles.pair}>
                                    <Tag sign={props.tarot} color='accent' size={16}/>
                                    <Text tag="p" color="accent" size="small">
                                        {text.tarot}
                                    </Text>
                                </span>
                            </>
                        )}
                    </div>
                </div>

                <Icon
                    name={getIconName(props.mindKey)}
                    size={{ width: 32, height: 6 }}
                    color="element"
                />
            </div>

            <div className={styles.body}>
                {!props.mini && (
                    <CircleQuadra
                        element={props.element}
                        gender={props.gender}
                        className={styles.quadra}
                        size={160}
                    />
                )}

                <Person name={props.id} className={styles.person} />
                
                {!props.mini && (
                    <Text
                        color="role"
                        size="small"
                        className={styles.population}
                    >
                        {text.percentage}
                    </Text>
                )}
                <Text
                    font="additional"
                    color="role"
                    size="h3"
                    className={styles.name}
                >
                    {text.name}
                </Text>

                {!props.mini && (
                    <div className={styles.footer}>
                        {text.yungs.map((row, $i) => (
                            <Text
                                tag="span"
                                size="small"
                                color="accent"
                                key={$i}
                                className={styles['footer-text']}
                            >
                                {row}
                            </Text>
                        ))}
                    </div>
                )}
            </div>
        </WhiteCard>
    );
};
