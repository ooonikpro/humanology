import styles from '../SuitsTarot.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Swords() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Swords' back>Мечи</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Про мечей.
            </Text>
        </div>
    );
}