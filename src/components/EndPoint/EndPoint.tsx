import React from 'react';
import { Icon } from '../Icon';


interface Props {
    className?: string;
}

export const EndPoint: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Icon name="Logo" size={24} color='accent' />
        </div>
    );
};