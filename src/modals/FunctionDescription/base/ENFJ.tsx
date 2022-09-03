import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFJ() {
    return (
        <>  
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Умеют различать тончайшие нюансы человеческих эмоций.
            </Text>            

            <Text tag="p">
                Способны вызывать у себя и у других любую эмоцию, умеют переходить от драмы к комедии за считанные доли секунды. 
            </Text>

            <Text tag="p">
                Умеют сочувствовать, часто они переживают горе других, как свое. Может настолько сильно переживать за состояние другого человека, что получит нервный срыв.
            </Text>

            <Text tag="p">
                Прирожденные ораторы, прекрасные актеры и публичные люди. Очень любят менять образы: сегодня — роковая женщина, а завтра —тургеневская девушка. 
            </Text>

            <Text tag="p">
                Часто нагнетает эмоциональное напряжение, может раздуть из мухи слона, в маленькой проблеме видит большую катастрофу, склонен к эмоциональным преувеличениям.
            </Text>
            <hr />
        </>
    );
}
