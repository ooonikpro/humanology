import React, { CSSProperties } from 'react';
import styles from './AppIframeWrapper.module.scss';

interface AppIframeWrapperProps {
  isShowCloseBtn?: boolean;
  onClickCloseBtn?: () => void;
  style?: CSSProperties
}

export const AppIframeWrapper: React.FC<AppIframeWrapperProps> = ({ isShowCloseBtn = false, onClickCloseBtn, style }) => {
    return (
        <div className={styles.root} style={style}>
            { isShowCloseBtn && <button onClick={onClickCloseBtn} className={styles.closeBtn}>&times;</button> }
            <iframe src="/" className={styles.iframe} frameBorder="0"/>
        </div>
    );
};
