import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENTJ() {
    return (
        <>  
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Воспринимает свою жизнь как череду планов, которые нужно сделать за день (неделю, год). 
            </Text>            

            <Text tag="p">
                Даже отдых воспринимает лишь как одно из звеньев плана, и на отдых отводит определенное количество времени.
            </Text>

            <Text tag="p">
                Прирожденные дельцы, эти люди способны увидеть выгоду в деле, просчитать, прогорит ли бизнес, или нет.
            </Text>

            <Text tag="p">
                Очень активны, любят заниматься спортом, не умеют бездельничать.
            </Text>

            <hr />
        </>
    );
}
