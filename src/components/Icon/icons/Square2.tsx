import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare2 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.208 14.16V15h-4.28v-.83l1.86-1.83c.367-.36.643-.65.83-.87.187-.227.317-.427.39-.6.074-.173.11-.36.11-.56v-.1c0-.32-.103-.57-.31-.75-.2-.18-.483-.27-.85-.27s-.653.097-.86.29c-.207.187-.31.45-.31.79v.21h-.92v-.22c0-.607.184-1.08.55-1.42.373-.347.887-.52 1.54-.52.647 0 1.153.17 1.52.51.373.333.56.793.56 1.38v.1c0 .393-.11.777-.33 1.15-.22.367-.613.83-1.18 1.39l-1.33 1.31h3.01Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare2;
