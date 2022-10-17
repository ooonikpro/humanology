import * as React from 'react';
import { SVGProps } from 'react';

const SvgTiktok = (props: SVGProps<SVGSVGElement>) => (
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
            d="M19.755 5.353a2.662 2.662 0 0 1-.227-.127 3.16 3.16 0 0 1-.584-.472 2.572 2.572 0 0 1-.657-1.293h.002A1.52 1.52 0 0 1 18.263 3h-1.982v7.305c0 .098 0 .195-.004.29l-.002.037-.001.016v.004c-.02.262-.109.515-.257.737a1.65 1.65 0 0 1-.59.536c-.25.136-.532.207-.82.206-.923 0-1.67-.717-1.67-1.604 0-.886.747-1.604 1.67-1.604.175 0 .35.026.515.078l.003-1.924a3.854 3.854 0 0 0-1.505.113 3.741 3.741 0 0 0-1.332.678c-.341.283-.628.62-.848.998-.084.137-.4.69-.438 1.587-.024.508.137 1.036.213 1.254v.004c.048.129.235.567.538.936.245.296.534.556.858.772v-.005l.005.005c.96.621 2.023.58 2.023.58.184-.007.801 0 1.501-.316.777-.35 1.22-.874 1.22-.874.282-.312.507-.668.664-1.052.18-.45.239-.988.239-1.204V6.678c.024.013.344.215.344.215s.462.282 1.181.466c.516.13 1.212.158 1.212.158V5.64c-.244.026-.739-.048-1.245-.288Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgTiktok;
