import { SocionicsType } from '../types';

export const TEMPERAMENT: Record<SocionicsType.Temperament, string> = {
    sanguine:       'Сангвиник',
    melancholic:    'Меланхолик',
    phlegmatic:     'Флегматик',
    choleric:       'Холерик',
};

export const TEMPERAMENT_LABEL: Record<SocionicsType.Temperament, string> = {
    sanguine:       'Гибко-разворотливый',
    melancholic:    'Восприимчиво-адаптивный',
    phlegmatic:     'Уравновешенно-стабильный',
    choleric:       'Линейно-напористый',
};