import styles from '../RelationshipsItem.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Dual() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Dual' back>Дуальные</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Офигеть, все работает.
            </Text>
        </div>
    );
}
