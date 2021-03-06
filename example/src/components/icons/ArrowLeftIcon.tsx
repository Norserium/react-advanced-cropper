import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ArrowLeftIcon: FC<Props> = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M8.7 4l.4.4c.1.1.2.3.2.5s-.1.4-.2.5L7.5 7.1h3.9c.4 0 .6.3.6.7v.7c0 .4-.2.7-.6.7H7.5l1.6 1.6c.1.1.2.3.2.5s-.1.4-.2.5l-.4.4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2L4.1 8.6c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5L7.7 4c.1-.1.3-.2.5-.2s.4.1.5.2z"
			/>
		</svg>
	);
};
