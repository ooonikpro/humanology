import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INFJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Имеет индивидуальные привычки выражения и изменения настроений. В разных ситуациях ободряет себя и окружающих подходящими средствами.
            </Text>

            <Text tag="p">
                В повседневной деятельности пользуется спонтанным умением оценить ближайшее развитие событий, врожденным чувством перспективы для предотвращения отрицательных сценариев развития ситуации.
            </Text>
        </>
    );
}

