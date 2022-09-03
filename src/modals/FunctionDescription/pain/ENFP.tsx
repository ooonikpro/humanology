import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ENFP() {
    return (
        <>
            <AuthorLine readTime='1'>О соционике</AuthorLine>

            <Text tag="p" color="role" size="h5">
                Не умеют работать с четко структурированными таблицами и документами. 
            </Text>

            <Text tag="p">
                Одна мысль о заполнении анкет и других муторных бумажек вводит в плохое настроение. 
            </Text>

            <Text tag="p">
                Часто может допускать ошибки в логических выводах, в счетах и в задачах, где требуется кропотливый труд.
            </Text>

            <Text tag="p">
                Очень боится показаться глупыми и неусидчивым, поэтому часто идет в технические вузы, чтобы «доказать всем, что он что-то умеет».
            </Text>

            <hr />
        </>
    );
}
