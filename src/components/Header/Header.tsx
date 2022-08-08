import React from 'react';

import styles from './Header.module.scss';

import { Icon } from '../Icon';
import { Line } from '../Line';
import { Text } from '../Text';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.sectionTop}>
                    <Icon name='Menu' color='accent' size={24} />
                    <span className={styles.rightMenu}>
                        <Icon name='Bookmark' color='accent' size={24} />
                        <Icon name='UserSquare' color='accent' size={24} />
                    </span>
            </div>
            <Line color='accent' opacity='o10'/>
            <div className={styles.sectionBottom}>
                 <span className={styles.left}>
                    <Icon name='MenuSquare' color='accent' size={16} />
                    <Text color='accent' size='small'>
                        Меню
                    </Text>
                </span>
                <span className={styles.right}>
                    <Text color='accent' size='small'>
                        Соционика
                    </Text>
                    <Icon name='FolderOpen'color='accent' size={16} />
                </span>
            </div>
        </header>
    );
};
