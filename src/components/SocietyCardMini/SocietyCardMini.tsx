import React from 'react';
import styles from './SocietyCardMini.module.scss';
import { Socionics } from '../../types';
import { QUADRAS } from '../../constants/natureElements';
import { ROLE } from '../../constants/role';
import { WhiteCard } from '../../components/WhiteCard';
import { getIconName, Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useColorRole } from '../../hooks';
import { CircleQuadra } from '../../components/CircleQuadra';
import { Person } from '../../components/Person';

type Props = Socionics.IntertypeProp & { id: Socionics.SocionicsType };

export const SocietyCardMini: React.FC<Props> = (props) => {
    const text = {
        id: props.id,
        element: QUADRAS[props.element],
        role: ROLE[props.role].label,
        name: props.name,
        alias: props.alias,
    };
    
    const { color: roleColor } = useColorRole(props.role);

    return (
        <WhiteCard className={styles.root} style={roleColor}>
            <div className={styles.body}>
                <div className={styles.tags}>

                    <Icon
                        name={getIconName(props.mindKey)}
                        size={{ width: 32, height: 6 }}
                        className={styles['mindset-key']}
                    />
                </div>
                <CircleQuadra
                    element={props.element}
                    gender={props.gender}
                    size={160}
                    className={styles['quadra-img']}
                />
                <Person name={props.id} className={styles.person} />
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
                    <Text tag="p" size="small" color="element">
                        {text.element}
                    </Text>
    
                    <Text tag="p" size="small" color="role">
                        {text.role}
                    </Text>
                </span>
                <span className={styles['id-alias']}>
                    <Text tag="p" size="small" color="grey">
                        {props.alias}
                    </Text>
                    <Text tag="p" size="small" color="accent">
                        {props.id}
                    </Text>
                </span>
            </div>
        </WhiteCard>
    );
};
