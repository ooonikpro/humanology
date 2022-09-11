import React from 'react';
import styles from './SocietyCardMini.module.scss';
import { Portrait } from '../Portrait';
import { Socionics } from '../../types';
import { QUADRAS } from '../../constants/natureElements';
import { ROLE } from '../../constants/role';
import { WhiteCard } from '../../components/WhiteCard';
import { getIconName, Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useColorRole } from '../../hooks';
import { CircleQuadra } from '../../components/CircleQuadra';
import { Tag } from '../../components/Tag';

type Props = Socionics.IntertypeProp & {
    id: Socionics.SocionicsType;
    className?: string;
 };

export const SocietyCardMini: React.FC<Props> = (props) => {
    const text = {
        id: props.id,
        gender: props.gender,
        element: QUADRAS[props.element],
        role: ROLE[props.role].label,
        name: props.name,
        alias: props.alias,
    };

    const { color: roleColor } = useColorRole(props.role);

    return (
        <WhiteCard className={[styles.root, props.className].join(' ')} style={roleColor}>
            <div className={styles.body}>
                <div className={styles.tags}>

                    <Icon
                        name={getIconName(props.mindKey)}
                        size={{ width: 32, height: 6 }}
                        className={styles['mindset-key']}
                    />
                </div>
                <CircleQuadra
                    id={props.id}
                    className={styles['quadra-img']}
                />
                <Portrait name={props.id} gender={props.gender} className={styles.portrait}/>
            </div>

            <div className={styles.footer}>
                <Text
                    font="additional"
                    color="role"
                    size="h6"
                    className={styles.name}
                >
                    {props.name}
                </Text>

                <span className={styles['element-role']}>
                    <span className={styles.pair}>
                        <Tag sign={props.element} color='element' size={16}/>
                        <Text tag="p" size="smaller" color="element">
                            {text.element}
                        </Text>
                    </span>
                    <span className={styles.pair}>
                        <Tag sign={props.role} color='role' size={16}/>
                        <Text tag="p" size="smaller" color="role">
                            {text.role}
                        </Text>
                    </span>
                </span>
                <span className={styles['id-alias']}>
                    <Text tag="p" size="smaller" color="grey">
                        {props.alias}
                    </Text>
                    <Text tag="p" size="smaller" color="accent">
                        {props.id}
                    </Text>
                </span>
            </div>
        </WhiteCard>
    );
};
