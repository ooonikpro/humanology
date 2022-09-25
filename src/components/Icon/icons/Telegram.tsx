import * as React from 'react';
import { SVGProps } from 'react';

const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M12 3c-7.412 0-9 1.588-9 9s1.588 9 9 9 9-1.588 9-9"
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
        />
        <path
            d="M18.148 4.07s.925-.346.847.495c-.025.347-.257 1.559-.436 2.87l-.617 3.883s-.052.569-.514.668c-.463.099-1.156-.347-1.285-.446-.103-.074-1.927-1.187-2.57-1.73-.18-.15-.385-.446.026-.792l2.698-2.474c.309-.297.617-.99-.668-.148l-3.597 2.35s-.412.247-1.182.024l-1.67-.494s-.617-.371.436-.743c2.57-1.162 5.73-2.35 8.532-3.462Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgTelegram;
