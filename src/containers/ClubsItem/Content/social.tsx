import styles from '../ClubsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Social() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Social' back>Социалы</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про социалов.
            </Text>
        </div>
    );
}