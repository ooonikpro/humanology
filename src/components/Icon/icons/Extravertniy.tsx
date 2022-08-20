import * as React from 'react';
import { SVGProps } from 'react';

const SvgExtravertniy = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width={48} height={48} rx={4} fill="#1B2431" />
    </svg>
);

export default SvgExtravertniy;
