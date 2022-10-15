import React, { useMemo } from 'react';
import styles from './Start.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { EndPoint } from '../../components/EndPoint';
import { BlockLink } from '../../components/BlockLink';
import { PageTitle } from '../../components/PageTitle';
import { Icon } from '../../components/Icon';
import { ROUTES } from '../../constants/routes';
import { AuthorLine } from '../../components/AuthorLine';
import { useNavigate } from 'react-router-dom';
import { PageBreak } from '../../components/PageBreak';
import { AppScrollbar } from 'src/components/AppScrollbar';

interface MenuItemProps {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    doubleHeight?: boolean;
    inactive?: boolean;
    big?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
    children,
    className,
    fullWidth = false,
    doubleHeight = false,
    inactive = false,
    big = false,
    onClick = () => void (0)
}) => {
    const classes = useMemo(() => [
        styles.menuItem,
        fullWidth && styles.fullWidth,
        doubleHeight && styles.doubleHeight,
        big && styles.big,
        inactive && styles.inactive,
        className
    ].filter(Boolean).join(' '), [className]);

    return (
        <div className={classes} onClick={onClick}>{children}</div>
    );
};

export default function Start() {

    const navigate = useNavigate();
    const goTo = (route: string) => () => navigate(route);

    return (
        <AppScrollbar>
            <WhiteCard color="beige" className={styles.root}>
                <PageTitle iconName='Square0'>Начало</PageTitle>
                <AuthorLine text="Читать меньше минуты" iconName="Time">äлёша</AuthorLine>

                <div className={styles.menuList}>
                    <MenuItem doubleHeight onClick={goTo(ROUTES.WHAT_IS_SOCIONICS)}>
                        <Icon size={24} className={styles.icon} color="accent" name="Help" />
                        <Text size="large" color="accent" className={styles.text}>Что это?</Text>
                        <Icon name="Fractal" color="accent" size={56} className={styles.image} />
                    </MenuItem>
                    <MenuItem doubleHeight onClick={goTo(ROUTES.DISCLAIMER)}>
                        <Icon size={24} className={styles.icon} color="accent" name="AlertSquare" />
                        <Text size="large" color="accent" className={styles.text}>Дисклеймер</Text>
                        <Icon name="Glvrd" color="accent" size={56} className={styles.image} />
                    </MenuItem>
                </div>

                <Text tag="p" color="accent" size="h4">
                    Это пока Альфаверсия.
                </Text>

                <Text tag="p" size="large">
                    Могут присутствовать различные баги и зависания. <br />Перезагружайте страницу.
                </Text>


                <div className={styles.warningBlock}>

                    <Text tag="span" size="h5">
                        Хотите помочь проекту — задонатите.
                    </Text>

                    <Text tag="p" size="body">
                        <i>Задонатить — пожертвовать денег на развитие проекта.</i>
                    </Text>

                    <a href="https://yoomoney.ru/to/4100117278088361" target="_blank" rel="noreferrer">
                        <BlockLink path="#" label="Задонатить через Юмани" icon="Money" />
                    </a>
                </div>

                <PageBreak>Свежие материалы</PageBreak>

                <div className={styles.linkblock}>
                    <BlockLink path="/tests" label="Тесты" icon="PresentationChart" />
                    <BlockLink path="/quadras/compatibility" label="Сексуальные программы квадр" icon="Dildo" />
                    <BlockLink path="/clubs/compatibility" label="Совместимость психосексуальных групп" icon="Cockring" />
                </div>

                <PageBreak>Подписывайтесь и читайте</PageBreak>

                <div className={styles.linkblock}>
                    <a href='https://t.me/+zNxs67GvQZljZDAy' target="_blank" rel="noreferrer">
                        <BlockLink path="#" label="Подпишитесь в Телеграмме" icon="Telegram" />
                    </a>
                    <a href='https://teletype.in/@humanology' target="_blank" rel="noreferrer">
                        <BlockLink path="#" label="Читайте блог на Телетайпе" icon="ExternalLink" />
                    </a>
                </div>
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
