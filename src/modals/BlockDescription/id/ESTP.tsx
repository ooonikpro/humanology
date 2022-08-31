import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTP() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В повседневной жизнедеятельности пользуется индивидуально наработанными способами создания, комфорта, удобства.
            </Text>

            <hr/>

            <Text tag="p">
                Спонтанно гибко и уверенно использует необходимый инструмент, технологию, процесс для осуществления текущей практической деятельности.
            </Text>
        </>
    );
}
