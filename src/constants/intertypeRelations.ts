import { Socionics } from '../types';

export const INTERTYPE_RELATIONS : Record<Socionics.IntertypeRelations, {name: string, lvl: number}> = {
    dual: {
        name: 'Дуальные',
        lvl: 4
    },

    activity: {
        name: 'Активации',
        lvl: 3
    },

    mirror: {
        name: 'Зеркальные',
        lvl: 2
    },

    identical: {
        name: 'Тождественные',
        lvl: 2
    },

    kindred: {
        name: 'Родственные',
        lvl: 2
    },

    semidual: {
        name: 'Полудуальные',
        lvl: 3
    },

    pragmatic: {
        name: 'Деловые',
        lvl: 2
    },

    illusionary: {
        name: 'Миражные',
        lvl: 3
    },

    beneficiary: {
        name: 'Заказа',
        lvl: 2
    },

    giver: {
        name: 'Подзаказный',
        lvl: 1
    },

    supervisor: {
        name: 'Ревизор',
        lvl: 2
    },

    underling: {
        name: 'Подревизный',
        lvl: 2
    },

    quasidentical: {
        name: 'Квазитождественные',
        lvl: 2
    },

    parallel: {
        name: 'Паралелльные',
        lvl: 2
    },

    contrary: {
        name: 'Погашения',
        lvl: 1
    },

    superego: {
        name: 'Суперэго',
        lvl: 1
    },

};
