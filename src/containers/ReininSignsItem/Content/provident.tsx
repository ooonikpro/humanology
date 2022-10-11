import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Provident() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Provident' back>Предусмотрительные</PageTitle>
            <AuthorLine text='Читать пока нечего' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про предусмотрительных.
            </Text>
        </div>
    );
}