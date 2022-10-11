import * as React from 'react';
import { SVGProps } from 'react';

const SvgTactician = (props: SVGProps<SVGSVGElement>) => (
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
            d="m43.58 40.01-3.925-2.976c11.611-18.328-27.67-18.171-16.343 0l-3.926 2.976c-7.284-7.314-9.634-20.034-4.996-29.005 4.456 3.559 9.094 5.681 13.766 6.372l-.52-4.95 7.302-.388-.569 5.392c4.839-.608 9.644-2.745 14.232-6.431 4.653 8.976 2.302 21.696-5.02 29.01Zm-9.26-13.402.878 23.039c.03 4.412-7.788 4.412-7.764.343l.786-23.382h6.1Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgTactician;
