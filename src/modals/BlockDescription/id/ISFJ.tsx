import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Индивидуальный, автоматически реализуемый способ создания для себя и близких позитивного эмоционального фона в разных жизненных ситуациях.
            </Text>

            <Text tag="p">
                По ходу жизни реагирует на неприятные ощущения, неудобства, дискомфорт и действует на их устранение.
            </Text>

            <Text tag="p">
                Чтобы чувствовать себя лучше, уменьшает дискомфорт в окружающем мире, устраняет неудобство и неприятные ощущения, создает уют.
            </Text>
        </>
    );
}

