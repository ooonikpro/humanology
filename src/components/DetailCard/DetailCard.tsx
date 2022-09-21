import React from 'react';
import { Text } from '../Text';
import styles from './DetailCard.module.scss';
import { TitleInfo } from '../TitleInfo';
import { TextInline } from '../TextInline';
import { getIconName, Icon } from '../Icon';
import { useNavigate } from 'react-router-dom';
import { Socionics } from 'src/types';
import { ROUTES } from 'src/constants/routes';

export type DetailCardProps = {
    type: 'function' | 'aspect';
    socionicFn?: Socionics.Function;
    aspect?: Socionics.Aspect;
    className?: string;
    title: string;
    subtitle?: string;
    tags: Array<string>
    content: Array<string>;
}

export const DetailCard: React.FC<DetailCardProps> = ({
    className = '',
    type,
    socionicFn,
    aspect,
    title,
    subtitle,
    tags,
    content,
}) => {
    const navigate = useNavigate();

    const rootClasses = [
        styles.root,
        className
    ].join(' ');

    let image: string;
    let icon: string;
    let url: string;

    const renderTitleInfoChild = () => {
        if (type === 'function') {
            image = require(`../../assets/simpleFunctions/${socionicFn}-example.svg`);
            url = ROUTES.FUNCTIONS_ITEM(socionicFn);
        }

        if (type === 'aspect') {
            url = ROUTES.ASPECT(aspect);
        }

        if (image) {
            return <img src={image} alt="" className={styles.image} />;
        }

        if (icon) {
            return <Icon name={getIconName(icon)} size={72} />;
        }

        return null;
    };

    const goTo = () => navigate(url);

    return (
        <div className={rootClasses} onClick={goTo}>
            <TitleInfo align="start" render={renderTitleInfoChild} />

            <Text tag="h4" size="h4" className={styles.text}>
                {title}
            </Text>

            <TextInline className={styles.tags}>
                {
                    tags.map((tag, $tagKey) => (
                        <Text color="accent" size="smaller" key={$tagKey}>
                            {tag}
                        </Text>
                    ))
                }
            </TextInline>

            {
                subtitle && (
                    <Text tag="p" size="h6" color="accent" className={styles.text}>
                        {subtitle}
                    </Text>
                )
            }

            {
                content.map((paragraph, $textKey) => (
                    <Text tag="p" className={styles.text} key={$textKey}>
                        {paragraph}
                    </Text>
                ))
            }
        </div>
    );
};
