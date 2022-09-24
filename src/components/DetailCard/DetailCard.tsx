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
    alias?: Array<string>;
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
    alias,
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
            url = ROUTES.ASPECT_ITEM(aspect);
        }

        if (image) {
            return <img src={image} alt="" className={styles.image} />;
        }

        if (icon) {
            return <Icon name={getIconName(icon)} size={72} />;
        }

        if (alias) {
            const aspectIconMini = getIconName(`aspect-${aspect}-mini`);
            const aspectIcon = getIconName(`aspect-${aspect}`);

            return (
                <>
                    <div className={styles.header}>
                        <Icon name={aspectIconMini} size={24} className={styles.aspecticonmini} />
                        {
                            alias.map((alias, $aliasKey) => (
                                <Text tag="span" color="black" size="body" className={styles.alias} key={$aliasKey}>
                                    {alias}
                                </Text>
                            ))
                        }
                    </div>
                    <Icon name={getIconName(aspectIcon)} size={128} color="accent" className={styles.aspectIcon} />
                </>
            );
        }

        return null;
    };

    const goTo = () => navigate(url);

    return (
        <div className={rootClasses} onClick={goTo}>
            <TitleInfo align="start" line={false} render={renderTitleInfoChild} />

            <Text tag="h4" size="h4" font="additional" className={styles.title}>
                {title}
            </Text>

            {
                subtitle && (
                    <Text tag="p" size="h6" color="accent" className={styles.subtitle}>
                        {subtitle}
                    </Text>
                )
            }

            <TextInline className={styles.tags}>
                {
                    tags.map((tag, $tagKey) => (
                        <Text color="accent" size="body" key={$tagKey}>
                            {tag}
                        </Text>
                    ))
                }
            </TextInline>

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
