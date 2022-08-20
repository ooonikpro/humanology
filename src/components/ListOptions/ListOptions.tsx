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
                            <Text>{item.label}</Text>
                            <Text color="grey">{item.value}</Text>

                            <hr className={styles.divinder}/>
                        </div>
                    );
                })
            }
        </div>
    );
};