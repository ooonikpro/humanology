import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare3 = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z"
            stroke="currentColor"
            fill="none"
        />
        <path
            d="M12.26 11.01c.593.033 1.057.213 1.39.54.333.327.5.763.5 1.31v.27c0 .613-.2 1.1-.6 1.46-.393.353-.933.53-1.62.53s-1.23-.167-1.63-.5c-.393-.333-.59-.79-.59-1.37v-.2h.92v.2c0 .32.113.567.34.74.227.173.547.26.96.26.4 0 .713-.097.94-.29.233-.193.35-.467.35-.82v-.26c0-.34-.117-.603-.35-.79-.233-.187-.56-.28-.98-.28H11v-.73l1.87-1.79H9.83v-.85h4.25v.85l-1.82 1.72Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare3;
