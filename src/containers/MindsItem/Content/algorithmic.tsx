import styles from '../MindsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Algorithmic() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Document' back>Диалектико-алгоритмическое</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про диалектико-алгоритмическое мышление.
            </Text>
        </div>
    );
}