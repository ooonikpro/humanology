import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Умеет превозмогать себя. Очень не любит, когда в коллективе или дома есть лентяи и люди, безответственно относящиеся к делам и к жизни. 
            </Text>

            <Text tag="p">
                Он чувствует себя хозяином: своей квартиры, своего дела, своих близких. Очень ревнив.
            </Text>

            <Text tag="p">
                В критической для себя ситуации может начать в прямом смысле рушить все вокруг — бить мебель, рвать обои, кричать.
            </Text>

            <Text tag="p">
                К счастью, такое бывает крайне редко.
            </Text>
            
            <hr />
        </>
    );
}

