import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ResizeHorizontalIcon: FC<Props> = ({ className }) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M13.1 5.2l2.7 2.7c.3.3.3.8 0 1.1l-2.7 2.7c-.5.5-1.3.1-1.3-.5V9.6H4.2V11c0 .7-.8 1-1.3.5L.2 8.9c-.3-.3-.3-.8 0-1.1l2.7-2.7c.5-.4 1.3-.1 1.3.6v1.4h7.6V5.7c0-.7.8-1 1.3-.5z"
			/>
		</svg>
	);
};
