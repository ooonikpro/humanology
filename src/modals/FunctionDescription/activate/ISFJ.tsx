import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Любит быстрые решения, ему тяжело жить рядом с медленными людьми.  
            </Text>

            <Text tag="p">
                Если для дела не хватает времени, то он способен собраться и сделать работу максимально быстро.
            </Text>

            <Text tag="p">
                Если для дела не хватает времени, то способен собраться и сделать работу максимально быстро.
            </Text>

            <Text tag="p">
                Часто интересуется судьбами людей, анализирует ошибки прошлого, любит взглянуть на ситуацию глобально с точки зрения времени.
            </Text>

            <hr />
        </>
    );
}

