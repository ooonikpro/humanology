import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Очень любят, когда в голове и дома порядок. Лучше всего, если во всей жизни царит порядок.
            </Text>

            <Text tag="p">
                Если нужно осознать сложную информацию, ему нужно её преподнести в виде структуры, системы или наглядной таблицы, что отлично умеет делать его дуал Аналитик.
            </Text>

            <Text tag="p">
                Когда выполняет задания начальства, то часто переживает, что сделал что-то не так, как положено.
            </Text>

            <Text tag="p">
                Любит слушать людей, которые могут разложить по полочкам и проанализировать любую ситуацию.
            </Text>

            <Text tag="p">
                Представителям этого типа интересна соционика, поскольку эта наука позволяет разложить по полочкам отношения и характеры.
            </Text>
        </>
    );
}
