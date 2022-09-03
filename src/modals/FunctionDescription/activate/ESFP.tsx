import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Активно интересуется бизнесом, работой, различной деятельностью.
            </Text>

            <Text tag="p">
                Ему приятно быть занятым, много работать, быть успешным человеком. Сложно работать на скучной работе. 
            </Text>

            <Text tag="p">
                Часто посещают тренинги о том, как быть эффективным, как больше работать, как построить бизнес — для них эти темы действительно интересны.
            </Text>

            <Text tag="p">
                Не всегда имея экспертное мнение о том, как стать лучшим работником, очень ценит опыт других людей, которые лучше в этом разбираются.
            </Text>

            <hr />
        </>
    );
}

