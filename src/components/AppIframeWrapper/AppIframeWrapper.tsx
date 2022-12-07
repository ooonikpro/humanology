import React, { CSSProperties } from 'react';
import styles from './AppIframeWrapper.module.scss';

interface AppIframeWrapperProps {
  isShowCloseBtn?: boolean;
  onClickCloseBtn?: () => void;
  style?: CSSProperties
  startUrl?: string
}

const Component: React.ForwardRefRenderFunction<HTMLIFrameElement, AppIframeWrapperProps> = ({ isShowCloseBtn = false, onClickCloseBtn, style, startUrl = '/' }, ref) => {
    return (
        <div className={styles.root} style={style}>
            { isShowCloseBtn && <button onClick={onClickCloseBtn} className={styles.closeBtn}>&times;</button> }
            <iframe src={startUrl} ref={ref} className={styles.iframe} frameBorder="0"/>
        </div>
    );
};

export const AppIframeWrapper = React.forwardRef(Component);
