import styles from '../RingItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Vital() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='VitalRing' back>Витальное кольцо</PageTitle>
            <AuthorLine text='Читать пока нечего' iconName='Document'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Тут будет статья про витальное кольцо.
            </Text>
        </div>
    );
}