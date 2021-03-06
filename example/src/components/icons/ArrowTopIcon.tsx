import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ArrowTopIcon: FC<Props> = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M12.1 8.9l-.4.4c-.1.1-.3.2-.5.2s-.4-.1-.5-.2L9.1 7.7v3.9c0 .4-.3.6-.7.6h-.8c-.4 0-.7-.2-.7-.6V7.7L5.3 9.3c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-.4-.4c-.1-.2-.2-.3-.2-.5s.1-.4.2-.5l3.6-3.6c.1-.2.3-.2.5-.2s.4.1.5.2l3.6 3.6c.1.1.2.3.2.5s-.1.3-.2.5z"
			/>
		</svg>
	);
};
