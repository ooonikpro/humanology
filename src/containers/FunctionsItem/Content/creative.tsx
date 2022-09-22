import { Text } from '../../../components/Text';
import styles from '../FunctionsItem.module.scss';

export default function Creative() {
    return (
        <Text tag="h1" size="h4" font="additional" color="accent" className={styles.title}>
            Творческая функция
        </Text>
    );
}
