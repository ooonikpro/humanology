import styles from '../SuitsCard.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function King() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='King' back>Короли</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Про королей.
            </Text>
        </div>
    );
}