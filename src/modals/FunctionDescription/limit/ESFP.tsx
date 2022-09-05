import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Всегда следит за своими родными, чтобы они не заболели.
            </Text>

            <Text tag="p">
                Если же все-таки они слегли, будет заботиться, лечить и кормить с ложечки.
            </Text>

            <Text tag="p">
                При этом, представители этого типа сами себя не жалеют и способны довести себя до нервного истощения.
            </Text>

            <Text tag="p">
                Осознают, что они заболели, лишь тогда, когда уже не могут встать с кровати.
            </Text>

            <hr />
        </>
    );
}

