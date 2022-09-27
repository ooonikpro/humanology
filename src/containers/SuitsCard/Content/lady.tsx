import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Lady() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Lady' back>Дамы</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Про дам.
            </Text>
        </div>
    );
}