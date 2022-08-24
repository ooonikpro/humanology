import React, { useMemo } from 'react';
import styles from './Menu.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { MAIN_LINKS } from '../../constants/routes';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
    const goTo = useNavigate();
    const menuItems = useMemo(() => MAIN_LINKS.sort((a, b) => a.order - b.order), [MAIN_LINKS]);

    return (
        <WhiteCard className={styles.card}>
            <ol className={styles.menu}>
                {
                    menuItems.map((item, $i) => {
                        return (
                            <li key={$i} className={styles.item}>
                                <Text
                                    size="h5"
                                    color="accent"
                                    className={styles.link}
                                    onClick={() => goTo(item.path)}
                                >
                                    {item.label}
                                </Text>
                            </li>
                        );
                    })
                }
            </ol>
        </WhiteCard>
    );
}