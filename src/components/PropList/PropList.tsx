import React from 'react';
import styles from './PropList.module.scss';
import { getIconName, Icon } from '../../components/Icon';
import { Text } from '../../components/Text';

export interface RowItem {
    iconColor?: 'element' | 'role' | 'accent' | 'black';
    iconSize?: { width: number, height: number };
    textColor: 'element' | 'role' | 'accent' | 'black';
    icon?: string,
    label: string,
    value: string;
    subLabel?: string;
}

interface Props {
    rows: RowItem[];
    className?: string;
}

export const PropList: React.FC<Props> = (props) => {
    return (
        <div className={[styles.root, props.className].join(' ')}>
            {
                props.rows.map((row, $i) => {
                    return (
                        <div key={$i} className={styles.row}>
                            <div className={styles.label}>
                                <Text size="smaller" color="grey">{row.label}</Text>
                            </div>
                            <div className={styles.value}>
                                <Text color={row.textColor}>{row.value}</Text>
                                
                                {
                                    row.icon &&
                                        <Icon
                                            name={getIconName(row.icon)}
                                            size={row.iconSize || 24}
                                            color={row.iconColor}
                                            className={styles.icon}
                                        />
                                }

                                {
                                    row.subLabel &&
                                        <Text
                                            color="grey" size="small"
                                            className={styles.sublabel}
                                        >
                                            { row.subLabel }
                                        </Text>
                                }
                            </div>

                        </div>
                    );
                })
            }
        </div>
    );
};