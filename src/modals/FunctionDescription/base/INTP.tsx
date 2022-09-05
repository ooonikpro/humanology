import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function INTP() {
    return (
        <>  
            <AuthorLine text="Читать меньше минуты" iconName="Time">О соционике</AuthorLine>
            
            <Text tag="p" color="role" size="h5">
                Способен отследить малейшие изменения в тенденциях, он прекрасно разбирается в ходе жизни.
            </Text>            

            <Text tag="p">
                Может предсказать, к чему приведет какое-либо событие.
            </Text>

            <Text tag="p">
                Легко видит несоответствия и противоречия в вопросах истории и времени.
            </Text>

            <Text tag="p">
                Люди этого типа часто становятся философами и эрудитами, им нравится изучать прошлое, отслеживать причины и следствия, интересоваться новыми веяниями в науке и культуре. 
            </Text>

            <Text tag="p">
                Старается всегда опережать события, и ему часто это удается. 
            </Text>

            <hr />
        </>
    );
}
