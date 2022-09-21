import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './FunctionsItem.module.scss';

export default function FunctionsItem() {
    const { functionName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./content/${functionName}.tsx`).default;

    return (
        <div className={styles.root}>
            FunctionsItem
            <Content />
        </div>
    );
}
