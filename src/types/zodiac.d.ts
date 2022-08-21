export namespace Zodiac {
	
	export type Elements =
		| 'air'
		| 'fire'
		| 'water'
		| 'earth'

	export type ZodiacSign =
        | 'aries'
        | 'taurus'
        | 'gemini'
        | 'cancer'
        | 'leo'
        | 'virgo'
        | 'libra'
        | 'scorpio'
        | 'sagittarius'
        | 'capricorn'
        | 'aquarius'
        | 'pisces';

	export type SignProp = {
        label: string;
        element: Elements;
    };


 }