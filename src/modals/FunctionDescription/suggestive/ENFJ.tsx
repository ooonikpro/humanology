import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Необходим порядок в жизни. Ему нравится, когда его близкие могут разложит по полочкам любую ситуацию.
            </Text>

            <Text tag="p">
                Нравится заниматься работой, в которой необходимо быть сосредоточенным.
            </Text>

            <Text tag="p">
                В целом, стоит жить по плану или по схеме, ему так будет гораздо проще, чем в мире хаоса и беспорядка.
            </Text>

            <Text tag="p">
                Любит упорядочивать предметы в своем доме, складывать книжки в одну полку, а тетрадки – в другую, наводить порядок, превращая кучи вещей в строгую систему.
            </Text>
        </>
    );
}
