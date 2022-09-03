import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>  
            <AuthorLine readTime='1'>О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Прекрасно разбирается в людях. Интуитивно чувствует человека, его мотивы, его настроение. 
            </Text>            

            <Text tag="p">
                Обладает прекрасной фантазией, умеет выдумывать и создавать целые истории.
            </Text>

            <Text tag="p">
                Не могут сидеть на месте и заниматься рутинной работой — мечтают о том, чтобы каждый день в их жизни было максимальное количество нового и интересного. 
            </Text>

            <hr />
        </>
    );
}
