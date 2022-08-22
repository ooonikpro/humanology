import React from 'react';
import styles from './ListOptions.module.scss';
import { Text } from '../Text';

interface Props {
    options: Array<{ label: string; value: string }>
    className?: string;
}

export const ListOptions: React.FC<Props> = (props) => {
    return (
        <div className={[styles.root, props.className].join(' ')}>
            {
                props.options.map((item, $i) => {
                    return (
                        <div className={styles.row} key={$i}>
                            <Text tag="p" color="grey" size="smaller">{item.label}</Text>
                            <hr className={styles.divider}/>
                            <Text tag="p" color="black">{item.value}</Text>
                        </div>
                    );
                })
            }
        </div>
    );
};