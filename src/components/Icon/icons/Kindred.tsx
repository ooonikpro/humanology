import * as React from 'react';
import { SVGProps } from 'react';

const SvgKindred = (props: SVGProps<SVGSVGElement>) => (
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
            d="m50.885 23.195-.257 9.037-3.418 5.337L46.732 52h-1.91l-2.18-13.282-2.34.03-.602-7.204 6.466-2.105-.473-13.032c2.702-1.627 6.43-2.11 11.352 0l.743 11.326-3.095 1.079-3.808-5.617Zm-13.71 0-.257 9.037L40.54 52h-1.91l-6.245-13.278-13.581.132-4.732 4.236-1.517 8.713-2.265.074.098-10.822 3.228-7.016.031-5.67c-1.676-.903-4.259-.622-4.259 6.52l-5.112 1.233c-2.061-12.537 8-13.2 11.304-9.66l10.614.136c0-4.57 4.842-15.449 17.146-10.196l.743 11.327-3.096 1.079-3.812-5.613Zm-11.207 17.54-4.356 2.543.96 8.428-2.34.29-2.503-9.542 1.22-1.574 7.02-.145Zm5.254.145 1.274 2.192-2.862 8.617h-1.8l.443-10.827 2.945.018Zm25.27-7.411L59 43.159l-1.964.75-3.095-6.375-4.339.877 2.764-5.07 4.126.128Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgKindred;