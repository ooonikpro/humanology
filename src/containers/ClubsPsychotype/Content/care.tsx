import styles from '../ClubsPsychotype.module.scss';
import { PageTitle } from '../../../components/PageTitle';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function Care() {
    return (
        <div className={styles.root}>
            <PageTitle iconName='Care' back>Заботливые</PageTitle>
            <AuthorLine text='Читать 4 минуты' iconName='Time'>Неизвестен</AuthorLine>
            <Text tag="p" className={styles.text}>
                Текст про заботливых.
            </Text>
        </div>
    );
}