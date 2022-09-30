import * as React from 'react';
import { SVGProps } from 'react';

const SvgBaseFunctionAnimation = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path opacity={0.05} d="m0 153 240-31.23V99L0 130.23V153Z" fill="#fff" />
        <path opacity={0.1} d="m0 124 240-31.295V87L0 118.295V124Z" fill="#fff" />
    </svg>
);

export default SvgBaseFunctionAnimation;
