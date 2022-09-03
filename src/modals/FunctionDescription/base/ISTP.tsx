import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ISTP() {
    return (
        <>  
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
               Человек, который воспринимает окружающую действительность через ощущения. 
            </Text>            

            <Text tag="p">
                Эти люди всегда оценивают перспективность и интересность каждой идеи, которая приходит им в голову, а приходит их много.
            </Text>

            <Text tag="p">
                Загоревшись чем-то, будет думать и работать по 24 часа в сутки, создавая необычные и смелые способы решения проблем.
            </Text>

            <Text tag="p">
                Очень не любит быть «обычным», «таким как все», для него рутина — это скука смертная, он всячески пытается ее избежать.
            </Text>

            <hr />
        </>
    );
}
