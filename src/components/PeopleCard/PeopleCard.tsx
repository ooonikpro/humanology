import React from 'react';
import { PeopleItem } from 'src/constants/people';
import { useSociotype } from 'src/hooks';
import { CircleQuadra } from '../CircleQuadra';
import { Portrait } from '../Portrait';
import { Text } from '../Text';
import { Icon, getIconName } from '../Icon';
import styles from './PeopleCard.module.scss';

export type PeopleCardProps = PeopleItem & {
    className?: string
};

export const PeopleCard: React.FC<PeopleCardProps> = ({
    id,
    uid,
    name,
    subtitle,
    birthDate,// dd.mm.YYYY
    gender,
    className = ''
}) => {
    const { sociotypeProps } = useSociotype(id);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric', month: 'long', year: 'numeric'
    };

    const date = new Date(birthDate);
    const localDate = date.toLocaleDateString('ru-RU', options);
    const readyBirthDate = localDate.slice(0, -3);

    return (
        <div className={[styles.root, className].join(' ')}>
            <div className={styles.upper}>
                <div className={styles.header}>
                    <div className={styles.userpic} style={{ backgroundImage: `url(${require(`../../assets/people/${uid}.png`)})` }} />
                    <div className={styles.portraitCircle}>
                        <Portrait name={id} gender={gender} className={styles.portrait} />
                        <CircleQuadra id={id} className={styles.circle} />
                    </div>
                </div>
                <div className={styles.info}>
                    <Text tag="p" size="h5" color="black" className={styles.name}>
                        {name}
                    </Text>
                    <Icon name={getIconName(gender)} color="accent" size={20} className={styles.genderIcon} />
                </div>
                <Text tag="p" size="base" color="black" className={styles.subtitle}>
                    {subtitle}
                </Text>
                <div className={styles.footer}>
                    <Text tag="span" size="smaller" color="accent" className={styles.birthDate}>
                        {readyBirthDate}
                    </Text>
                    <Icon name="Logo" size={16} color="accent" className={styles.logo} />
                </div>
            </div>
            <div className={styles.downtown}>
                <div className={styles.iconrow}>
                    <Icon name={getIconName(sociotypeProps.element)} size={24} color="element" />
                    <Icon name={getIconName(sociotypeProps.role)} size={24} color="role" />
                    <Icon name={getIconName(sociotypeProps.tarot)} size={24} color="accent" className={styles.icon50} />
                    <Icon name={getIconName(sociotypeProps.club)} size={24} color="accent" className={styles.icon50} />
                    <Icon name={getIconName(sociotypeProps.psychotype)} size={24} color="accent" className={styles.icon50} />
                </div>
                <Text font="additional" size="base" color="role">
                    {sociotypeProps.name}
                </Text>
            </div>
        </div>
    );
};
