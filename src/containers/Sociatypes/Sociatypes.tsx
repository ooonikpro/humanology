import React from 'react';
import styles from './Sociatypes.module.scss';
import { Outlet, useParams } from 'react-router-dom';
import { useIntertype } from '../../hooks/useSocionicsType';
import { Socionics } from '../../types';

export default function Sociatypes() {
    const params = useParams();
    const { styles: inlineStyles } = useIntertype(params.id?.toUpperCase() as Socionics.SocionicsType);

    return (
        <div className={styles.root} style={inlineStyles}>
            <Outlet />
        </div>
    );
}