import React from 'react';
import { Text } from '../../../../components/Text';
import { AuthorLine } from '../../../../components/AuthorLine';

export default function ESFP() {
    return (
        <>
            <AuthorLine text='Читать 3 минуты' iconName='Time'>Виктор Гуленко</AuthorLine>

            <Text tag="h2" font="additional" size="h5" color="accent">
                Сильные стороны
            </Text>

            <Text tag="p" size="h6" color="role">
                Имеет хорошие дипломатические и коммерческие способности. Быстро ориентируется в экстремальных ситуациях.
            </Text>

            <Text tag="p">
                Уверен в себе, смел и решителен. Всегда знает, чего хочет. Советуется больше формально, решения принимает самостоятельно.
            </Text>

            <Text tag="p">
                Стремится быть в курсе различных событий и сам любит быть в центре внимания. В общении вежлив, располагает к доверию, умеет создать атмосферу интимности и задушевности.
            </Text>

            <Text tag="p" size="h6" color="role">
                Обаятелен, демократичен, обычно держится раскованно и непринужденно. Эстет, любит одеваться со вкусом и разнообразно. Заботится о близких, ценит уют и комфорт.
            </Text>

            <Text tag="p">
                Стремится к практической деятельности. Предпочитает ближайшие конкретные цели, приносящие реальную пользу.
            </Text>

            <hr />

            <Text tag="h2" font="additional" size="h5" color="accent">
                Проблемы
            </Text>

            <Text tag="p">
                Довольно неорганизован, склонен отвлекаться в работе на несущественные детали. Ему трудно долгое время концентрировать своё внимание на чем-то одном.
            </Text>

            <Text tag="p">
                Склонен к колебаниям в выборе, что приводит к внутренним размышлениям и сомнениям, которые он скрывает. Его настоящим доверием пользуются немногие.
            </Text>

            <Text tag="p">
                Довольно консервативен к новому: ему нужно определенное время, чтобы воспринять и разобраться в новой технологии и убедиться в её практичности.
            </Text>

            <Text tag="p">
                Идет на риск только после того, как хорошо все взвесит. Склонен нивелировать индивидуальные склонности людей, любит, чтобы все действовали единообразно.
            </Text>

            <Text tag="p" size="h6" color="role">
                Проявляет агрессивность, если его свободу ограничивают. Своё настроение переносит на окружающих.
            </Text>

            <hr />

            <Text tag="h2" font="additional" size="h5" color="accent">
                Нельзя требовать и ожидать
            </Text>

            <Text tag="ul">
                <Text tag="li">
                    Пунктуальности и обязательности.
                </Text>
                <Text tag="li">
                    Организованности и логичности в делах.
                </Text>
                <Text tag="li">
                    Умения хорошо распределять обязанности.
                </Text>
                <Text tag="li">
                    Глубоких стратегических и аналитических способностей.
                </Text>
                <Text tag="li">
                    Справедливости при распределении материальных благ.
                </Text>
                <Text tag="li">
                    Выполнения всех своих обещаний.
                </Text>
            </Text>

            <hr />

            <Text tag="h2" font="additional" size="h5" color="accent">
                Подходящие виды деятельности
            </Text>

            <Text tag="p">
                Успешно проявляет себя в социальной сфере,  торговле (особенно оптовой), снабжении, дипломатическом представительстве, в организации и проведении культурно-массовых мероприятий, в шоу-бизнесе, сфере развлечений, на эстраде.
            </Text>
        </>
    );
}
