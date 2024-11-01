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
            d="m11.843 6.377-.277-.751c.257-.156.761-.1 1.073-.404.982-.965-.457-2.401-1.468-1.408-.515.506-.152 1.296-.82 2.419l-.735-.712c.469-.968.264-1.783.84-2.35 1.995-1.958 4.83.807 2.901 2.698-.412.402-.99.349-1.514.508Zm-2.253.992-.865-1.037.513-.434.876.981-.524.49Zm-.263 3.2 1.029-.87.47.486-1.12.886-.379-.501Zm3.988 2.17-.922.761-1.242-1.189.821-.838 1.343 1.266Zm-3.11-1.267.903-.993.524.421-.992 1.023-.435-.451Zm-1.68-3.246 1.238 1.166-.821.807-3.553-3.4.781-.795 1.642 1.549c.251-.24.47-.46.656-.631l.664.702-.607.602ZM4.47 6.064l.981-.905.485.461-1.056.909-.41-.465Zm-.857-.735.877-1.07.516.44-.89 1.037-.503-.407Zm3.594 4.203c-1.824 1.808-3.974 3.944-3.974 3.944l-.725-.842s2.178-2.08 4.007-3.835l.692.733ZM2 3.555l.698-.828 1.368 1.292-.75.795L2 3.554Z"
            fill="currentColor"
        />
    </svg>
);

export default SvgWands;
