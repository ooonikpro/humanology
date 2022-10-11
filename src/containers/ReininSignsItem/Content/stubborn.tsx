import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Stubborn() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Stubborn' back>Упрямые</PageTitle>
            <AuthorLine text='Читать пока нечего' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про упрямых.
            </Text>
        </div>
    );
}