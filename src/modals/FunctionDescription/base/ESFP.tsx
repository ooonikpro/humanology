import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>  
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Способен быстро оценить, какой человек слабый, а какой сильный, понять, на кого можно давить, а на кого не стоит.
            </Text>            

            <Text tag="p">
                Способен узнать уязвимые места у знакомых людей и, воздействуя на них, добиться нужного. Всегда сможет за себя постоять.
            </Text>

            <Text tag="p">
                Любит командовать, особенно если подчиненные слабее его. В случае более сильных людей предпочитает общаться на равных.
            </Text>

            <hr />
        </>
    );
}
