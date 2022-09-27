import styles from '../MindsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Causal() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Причинно-следственное</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про причинно-следственное мышление.
            </Text>
        </div>
    );
}