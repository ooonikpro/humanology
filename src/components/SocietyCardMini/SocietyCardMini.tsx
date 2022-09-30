import React from 'react';
import styles from './SocietyCardMini.module.scss';
import { Portrait } from '../Portrait';
import { Socionics } from '../../types';
import { QUADRAS } from '../../constants/natureElements';
import { ROLE } from '../../constants/role';
import { WhiteCard } from '../WhiteCard';
import { getIconName, Icon } from '../Icon';
import { Text } from '../Text';
import { useSociotype } from '../../hooks';
import { CircleQuadra } from '../CircleQuadra';
import { Tag } from '../Tag';

type Props = {
    id: Socionics.SocionicsType;
    className?: string;
};

export const SocietyCardMini: React.FC<Props> = (props) => {
    const { cssColors: sociotypeColors, sociotypeProps } = useSociotype(props.id);

    const text = {
        id: sociotypeProps.id,
        gender: sociotypeProps.gender,
        element: QUADRAS[sociotypeProps.element],
        role: ROLE[sociotypeProps.role].label,
        name: sociotypeProps.name,
        alias: sociotypeProps.alias,
    };

    return (
        <WhiteCard className={[styles.root, props.className].join(' ')} style={sociotypeColors}>
            <div className={styles.body}>
                <div className={styles.tags}>

                    <Icon
                        name={getIconName(sociotypeProps.mindKey)}
                        size={{ width: 32, height: 6 }}
                        className={styles['mindset-key']}
                    />
                </div>
                <CircleQuadra
                    id={sociotypeProps.id}
                    className={styles['quadra-img']}
                />
                <Portrait name={sociotypeProps.id} gender={sociotypeProps.gender} className={styles.portrait} />
            </div>

            <div className={styles.footer}>
                <Text
                    font="additional"
                    color="role"
                    size="h5"
                    className={styles.name}
                >
                    {sociotypeProps.name}
                </Text>

                <span className={styles['element-role']}>
                    <span className={styles.pair}>
                        <Tag sign={sociotypeProps.element} color='element' size={16} />
                        <Text tag="span" size="body" color="element">
                            {text.element}
                        </Text>
                    </span>
                    <span className={styles.pair}>
                        <Tag sign={sociotypeProps.role} color='role' size={16} />
                        <Text tag="span" size="body" color="role">
                            {text.role}
                        </Text>
                    </span>
                </span>
                <span className={styles['id-alias']}>
                    <Text tag="span" size="body" color="grey" className={styles.alias}>
                        {sociotypeProps.alias}
                    </Text>
                    <Text tag="span" size="body" color="accent">
                        {sociotypeProps.id}
                    </Text>
                </span>
            </div>
        </WhiteCard>
    );
};
