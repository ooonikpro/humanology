import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В повседневной деятельности опирается на выработанные опытом схемы и структуры.
            </Text>

            <Text tag="p">
                Следует индивидуально наработанному способу строить логику поступков.
            </Text>
            
            <Text tag="p">
                Спонтанно и точно оценивает скрытые свойства и возможности. Легко схватывает суть явлений и событий.
            </Text>
        </>
    );
}
