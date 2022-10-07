import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень боится опаздывать, всегда нервничает, если что-то идет не по плану и происходит не вовремя.
            </Text>

            <Text tag="p">
                Не любит непунктуальных людей, сам всегда приходит заранее, чтобы успеть к началу.
            </Text>

            <Text tag="p">
                Всегда переживает, когда планы срываются, может впасть в ступор от неожиданности.
            </Text>

            <Text tag="p">
                Любит стабильность, как в работе, так и в личной жизни. Не умеет предсказывать опасные ситуации.
            </Text>

        </>
    );
}
