import * as React from 'react';
import { SVGProps } from 'react';

const SvgDemocrat = (props: SVGProps<SVGSVGElement>) => (
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
            d="M44.153 38.594c2.142-5.567 1.649-13.508-1.779-19.245C48.332 20.72 52.835 24.922 54 33.405l-2.392 6.782-7.455-1.593ZM36.62 16.93l-.177-1.87 4.539-.06-.183 2.282-4.179-.352Zm3.428 2.031c4.446 5.965 3.699 14.239 1.996 19.19L21.55 33.785c.538-10.245 7.745-14.955 15.943-14.955.853 0 1.707.044 2.556.132Zm-9.847 24.53c-5.642 0-4.655-4.513-14.725-4.792l5.1-2.97 18.183 3.7c-1.854 1.967-5.766 4.062-8.558 4.062Zm-.05 1.871c4.064 0 7.634-2.282 11.23-5.417l3.055.616C41.227 43.993 34.332 48 30.411 48c-9.452 0-7.372-7.411-19.78-4.897L10 41.885l2.223-1.301a25.675 25.675 0 0 1 3.73-.215c7.762.01 8.091 4.993 14.2 4.993Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgDemocrat;
