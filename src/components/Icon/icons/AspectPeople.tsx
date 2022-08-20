import * as React from 'react';
import { SVGProps } from 'react';

const SvgAspectPeople = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.508 36.03c3.54-2.091 3.892-9.48-2.834-6.373 2.885 4.778 1.239 11.332-4.963 13.648v1.574L25.422 45v-2.106a10.613 10.613 0 0 1-5.065-4.044C11.927 36.3 16.724 27.333 12 24.565l2.13-1.628c3.4.94 3.858 4.948 6.176 6.716a10.66 10.66 0 0 1 5.134-4.294v-2.5l12.253.442-.157 2.05a11.442 11.442 0 0 1 3.052 1.839c13.808-6.757 12.59 11.355 3.866 12.348l1.054-3.507Zm-13.63-13.986c-2.782 0-2.655-4.044-.043-4.044 2.613 0 2.587 4.044.044 4.044Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgAspectPeople;
