import styles from '../QuadrasItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Water() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Fire' back>Вода</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Тут будет про Воду.
            </Text>
        </div>
    );
}