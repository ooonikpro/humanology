export namespace Bazi {

        export type Elements=
                | 'air'
                | 'fire'
                | 'water'
                | 'earth';

        export type YearElements=
                | 'wood'
                | 'fire'
                | 'earth'
                | 'metal'
                | 'water';

        export type BaziSign =
                | 'bull'
                | 'dragon'
                | 'goat'
                | 'rat'
                | 'horse'
                | 'monkey'
                | 'chicken'
                | 'dog'
                | 'pig'
                | 'tiger'
                | 'hare'
                | 'snake';

        export type SignProp = {
                label: string;
                element: Bazi.Elements;
        };
}