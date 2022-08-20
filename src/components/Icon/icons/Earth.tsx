import * as React from 'react';
import { SVGProps } from 'react';

const SvgEarth = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.614 11.5h8.772c.339 0 .614.275.614.612a.614.614 0 0 1-.614.612H3.614A.614.614 0 0 1 3 12.112c0-.337.275-.612.614-.612Zm8.772-3.983H3.614A.614.614 0 0 0 3 8.129c0 .337.275.612.614.612h8.772A.614.614 0 0 0 13 8.129a.614.614 0 0 0-.614-.612Zm0-3.983H3.614A.614.614 0 0 0 3 4.146c0 .337.275.612.614.612h8.772A.614.614 0 0 0 13 4.146a.614.614 0 0 0-.614-.612Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgEarth;
