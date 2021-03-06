import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ArrowRightIcon: FC<Props> = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M7.3 12.2l-.4-.4c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5l1.6-1.6H4.6c-.4 0-.6-.3-.6-.7v-.7c0-.4.2-.7.6-.7h3.9L6.9 5.4c-.2-.1-.3-.3-.3-.5s.1-.4.2-.5l.5-.4c.1-.1.3-.2.5-.2s.3.1.5.2l3.6 3.6c.1.1.2.3.2.5s-.1.4-.2.5l-3.6 3.6c-.1.1-.3.2-.5.2s-.4 0-.5-.2z"
			/>
		</svg>
	);
};
