import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеет окружить себя комфортом, он не будет работать в аскетичной обстановке. 
            </Text>

            <Text tag="p">
                Для работы выберет удобный стол, удобный стул, подберет освещение и сделает все так, чтобы никакой сенсорный дискомфорт не отвлекал его от дела.
            </Text>

            <Text tag="p">
                Часто прекрасный кулинар и гурман, умеет приготовить еду «из ничего».
            </Text>

            <Text tag="p">
                В доме у него чисто и уютно, он сам всегда выглядит опрятно и ухоженно. Следит за собой, не позволяет себе выглядеть плохо.
            </Text>
        </>
    );
}
