import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare12 = (props: SVGProps<SVGSVGElement>) => (
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
            d="M10.319 15h-.93V9.88c-.24.093-.524.14-.85.14h-.77v-.86h.73c.293 0 .513-.06.66-.18.153-.127.23-.307.23-.54h.93V15Zm5.779-.84V15h-4.28v-.83l1.86-1.83c.366-.36.643-.65.83-.87.187-.227.317-.427.39-.6.073-.173.11-.36.11-.56v-.1c0-.32-.103-.57-.31-.75-.2-.18-.484-.27-.85-.27-.367 0-.654.097-.86.29-.207.187-.31.45-.31.79v.21h-.92v-.22c0-.607.183-1.08.55-1.42.373-.347.886-.52 1.54-.52.646 0 1.153.17 1.52.51.373.333.56.793.56 1.38v.1c0 .393-.11.777-.33 1.15-.22.367-.614.83-1.18 1.39l-1.33 1.31h3.01Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgSquare12;
