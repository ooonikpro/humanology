import styles from '../DichotomiesYungItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Logic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Логики</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про логиков.
            </Text>
        </div>
    );
}