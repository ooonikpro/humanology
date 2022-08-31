import React from 'react';
import { Text } from '../../../components/Text';
import { AuthorLine } from '../../../components/AuthorLine';

export default function ESTJ() {
    return (
        <>
            <AuthorLine readTime='2'>Виктор Пятницкий</AuthorLine>

            <Text tag="p" color="role" size="h5">
                В окружающих его объектах, событиях, явлениях видит прежде всего практическую сторону.
            </Text>

            <Text tag="p">
                Воспринимает все с точки зрения применения в деятельности, свойств и качеств, могущих пригодиться для интересующей его работы. Работу, деятельность видит как развернутый процесс — полный набор действий с начала до конца (концом является конкретный, завершенный результат).
            </Text>

            <Text tag="p">
                Способен учесть нюансы каждого этапа работы, скорректировать действия согласно текущей ситуации, среди отработанных методов или подходов выбрать оптимальный.
            </Text>

            <Text tag="p">
                Постоянно совершенствуется в своей профессиональной области, шлифует свое мастерство.
            </Text>

            <Text tag="p">
                Хорошо владеет ощущением удобства, комфорта и дискомфорта. Его видение эстетики и красоты охватывает любые объекты, может изменяться с учетом ситуации.
            </Text>

            <Text tag="p">
                Стремится создавать комфортные условия, устранять дискомфорт с целью создания необходимых условий для работы. Применяет понимание красоты для улучшения свойств конкретных объектов.
            </Text>
        </>
    );
}

