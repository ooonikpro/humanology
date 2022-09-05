import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеет обращаться со временем: он всегда рассчитывает, сколько времени займет то или иное дело.
            </Text>

            <Text tag="p">
                Он знает, когда нужно серьезно поработать, чтобы достичь необходимого результата.
            </Text>

            <Text tag="p">
                Не любит опаздывающих людей, поскольку они тратят его время, которое он мог бы потратить на что-то выгодное и полезное.
            </Text>

            <Text tag="p">
                Любит анализировать свой и чужой опыт из прошлого, чтобы в будущем не совершать похожих ошибок.
            </Text>
        </>
    );
}
