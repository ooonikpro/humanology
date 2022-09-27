import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Paige() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Paige' back>Пажи</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Про пажей.
            </Text>
        </div>
    );
}