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
    type: 'function' | 'aspect' | 'block' | 'ring' | 'quadra' | 'suit' | 'role' | 'club' | 'psychotype' | 'mindset' | 'intertype' | 'yung'
    socionicFn?: Socionics.Function;
    aspect?: Socionics.Aspect;
    quadra?: Socionics.Quadras;
    suit?: Socionics.Tarot;
    role?: Socionics.Role;
    club?: Socionics.Club;
    psychotype?: Socionics.Psychotype;
    mindset?: Socionics.Mindset;
    intertype?: Socionics.IntertypeRelations;
    ring?: 'mental' | 'vital'
    block?: 'ego' | 'superego' | 'id' | 'superid'
    yung?: Socionics.Dichotomy;
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
    quadra,
    suit,
    role,
    club,
    psychotype,
    mindset,
    intertype,
    ring,
    block,
    yung,
    title,
    alias,
    subtitle,
    tags,
    content,
}) => {
    const navigate = useNavigate();

    const rootClasses = [
        styles.root,
        intertype && styles[intertype],
        quadra && styles[quadra],
        role && styles[role],
        psychotype && styles[psychotype],
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

        if (type === 'block') {
            url = ROUTES.BLOCKS_ITEM(block);
            image = require(`../../assets/images/block-${block}.svg`);
        }

        if (type === 'ring') {
            url = ROUTES.RING_ITEM(ring);
            image = require(`../../assets/images/${ring}-ring.svg`);
        }

        if (type === 'mindset') {
            url = ROUTES.MINDSETS_ITEM(mindset);
            image = require(`../../assets/images/${mindset}.svg`);
        }

        if (type === 'aspect') {
            url = ROUTES.ASPECT_ITEM(aspect);
        }

        if (type === 'yung') {
            url = ROUTES.QUADRAS_ITEM(quadra);
        }

        if (type === 'quadra') {
            url = ROUTES.QUADRAS_ITEM(quadra);
        }

        if (type === 'role') {
            url = ROUTES.SUITS_CARD(role);
        }

        if (type === 'suit') {
            url = ROUTES.SUITS_TAROT(suit);
        }

        if (type === 'club') {
            url = ROUTES.CLUBS_ITEM(club);
        }

        if (type === 'psychotype') {
            url = ROUTES.CLUBS_PSYCHOTYPE(psychotype);
        }

        if (type === 'yung') {
            url = ROUTES.DICHOTOMIES_YUNG(yung);
        }

        if (role === 'king') {
            return (
                <div className={styles.kings}>
                    <Icon name={getIconName(role)} size={80} className={styles.detailCardIcon} />
                    <Icon name="Queen" size={80} className={styles.detailCardIcon} />
                </div>
            );
        }

        if (image) {
            return <img src={image} alt="" className={styles.image} />;
        }

        if (icon) {
            return <Icon name={getIconName(icon)} size={80} />;
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

        if (quadra) {
            return <Icon name={getIconName(quadra)} size={64} className={styles.detailCardIcon} />;
        }

        if (suit) {
            return <Icon name={getIconName(suit)} size={64} className={styles.detailCardIcon} />;
        }

        if (role) {
            return <Icon name={getIconName(role)} size={64} className={styles.detailCardIcon} />;
        }

        if (club) {
            return <Icon name={getIconName(club)} size={64} className={styles.detailCardIcon} />;
        }

        if (psychotype) {
            return <Icon name={getIconName(psychotype)} size={64} className={styles.detailCardIcon} />;
        }

        if (intertype) {
            url = ROUTES.RELATIONSHIPS_ITEM(intertype);
            return (
                <>
                    <Icon name={getIconName(intertype)} size={128} className={styles.detailCardIcon} />
                    <Icon name="IntertypeBg" size={152} className={styles.intertypeBg} />
                </>
            );
        }

        return null;
    };

    const goTo = () => navigate(url);


    return (
        <div className={rootClasses} onClick={goTo}>
            <TitleInfo icon align="start" line={false} render={renderTitleInfoChild} />
            {
                <Text tag="h2" size="h4" font="additional" className={styles.title}>
                    {title}
                </Text>
            }

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
