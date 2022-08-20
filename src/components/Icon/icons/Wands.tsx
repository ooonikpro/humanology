import * as React from 'react';
import { SVGProps } from 'react';

const SvgWands = (props: SVGProps<SVGSVGElement>) => (
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
            d="M6.274 8.005a557.17 557.17 0 0 0-3.956-3.429c-.699-.58.763-2.472 1.642-1.691L8 6.473l4.04-3.588c.88-.781 2.34 1.11 1.642 1.691-.3.249-2.027 1.748-3.956 3.43 1.892 1.679 3.594 3.19 3.927 3.484.77.681-.748 2.304-1.477 1.665A3756.53 3756.53 0 0 0 8 9.51c-2.01 1.753-3.853 3.362-4.176 3.646-.729.64-2.247-.984-1.477-1.665l3.927-3.485ZM2.98 11.92l7.63-6.77 1.84-1.624.524.605-1.824 1.605-7.67 6.734-.5-.55Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgWands;
