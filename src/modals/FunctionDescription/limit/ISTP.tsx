import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Считает, что нельзя принуждать людей к работе.
            </Text>

            <Text tag="p">
                Не давят на других людей, при этом резко дают отпор, когда давят на них.
            </Text>

            <Text tag="p">
                В случае угрозы могут постоять за себя и за близких, но самостоятельно ни на кого нападать не будут.
            </Text>

        </>
    );
}

