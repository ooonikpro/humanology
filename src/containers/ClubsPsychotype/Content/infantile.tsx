import styles from '../ClubsPsychotype.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Infantile() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Infantile' back>Инфантилы</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про инфантилов.
            </Text>
        </div>
    );
}