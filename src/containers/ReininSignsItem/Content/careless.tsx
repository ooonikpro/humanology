import styles from '../ReininSignsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Careless() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Careless' back>Беспечные</PageTitle>
            <AuthorLine text='Читать пока нечего' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про беспечных.
            </Text>
        </div>
    );
}