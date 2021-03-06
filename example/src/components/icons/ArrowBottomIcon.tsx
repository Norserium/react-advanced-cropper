/* eslint-disable react/no-unknown-property */
import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ArrowBottomIcon: FC<Props> = ({ className }) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M3.9 7.4l.4-.4c.1-.1.3-.2.5-.2s.4 0 .5.2l1.6 1.6V4.7c0-.4.3-.6.7-.6h.7c.4 0 .7.2.7.6v3.9L10.7 7c.1-.1.3-.2.5-.2s.4.1.5.2l.4.4c.1.1.2.3.2.5s-.1.4-.2.5L8.5 12c-.1.1-.3.2-.5.2s-.4-.1-.5-.2L3.9 8.4c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5z"
			/>
		</svg>
	);
};
