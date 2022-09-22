import { Text } from '../../../components/Text';
import styles from '../AspectsItem.module.scss';

export default function People() {
    return (
        <Text tag="h1" size="h4" font="additional" color="accent" className={styles.title}>
            Этика отношений
        </Text>
    );
}
