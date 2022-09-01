import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnderling = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19.664 14.526 19.938 12h24.594l.693 2.352-1.468 2.974C55.94 25.278 54.567 45.857 39.98 51h-.023l-16.008-.357-.068.055c-14.987-5.655-15.53-25.74-3.133-33.468l-1.085-2.704Zm5.631 33.134 14.157-.064c11.212-4.516 12.398-20.086 3.31-26.88-8.207 4.575-11.494-6.863-21.79.416-8.79 7.023-7.714 22.181 4.323 26.528Zm1.692-15.135a17.27 17.27 0 0 1 2.64-1.629l-1.03-1.803 6.52-3.998s1.855 2.37 2.343 3.843c2.804.174 5.535 1.555 7.295 5.367-2.08 3.623-5.088 4.547-8.043 4.337-1.04 1.428-3.68 1.789-6.739 1.542l2.239-2.599c-2.32-.86-4.186-1.958-4.906-2.205-1.003 3.203-4.852 4.118-7.41 3.042 2.568-2.09 3.566-6.263-.911-9.324 4.204-.86 6.492.247 8.002 3.427Zm12.602 1.917c1.696 0 1.705-2.645-.027-2.645-.35.004-.683.147-.928.397a1.324 1.324 0 0 0 .955 2.248Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgUnderling;
