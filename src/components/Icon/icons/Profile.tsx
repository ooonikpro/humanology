import * as React from 'react';
import { SVGProps } from 'react';

const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M24.5 4h-17A3.504 3.504 0 0 0 4 7.5v17A3.504 3.504 0 0 0 7.5 28h17a3.504 3.504 0 0 0 3.5-3.5v-17A3.504 3.504 0 0 0 24.5 4ZM12 14.186V12a4 4 0 1 1 8 0v2.186a.675.675 0 0 1 .184.763l-.368 1.102a1.49 1.49 0 0 1-.932.88l-.165 1.317A2 2 0 0 1 16.734 20h-1.468a2 2 0 0 1-1.985-1.752l-.165-1.317a1.49 1.49 0 0 1-.932-.88l-.368-1.102a.676.676 0 0 1 .184-.763ZM23 24.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.959a2 2 0 0 1 .853-1.638l1.787-1.25A3.995 3.995 0 0 0 15.266 22h1.468a3.996 3.996 0 0 0 3.626-2.348l1.787 1.25a2 2 0 0 1 .853 1.64V24.5Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgProfile;
