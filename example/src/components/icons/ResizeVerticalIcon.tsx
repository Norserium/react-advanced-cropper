import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const ResizeVerticalIcon: FC<Props> = ({ className }) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path
				fill="#FFF"
				d="M11.2 13.1l-2.7 2.7c-.3.3-.8.3-1.1 0l-2.7-2.7c-.5-.5-.1-1.3.5-1.3h1.4V4.2H5.3c-.7 0-1-.8-.5-1.3L7.5.2c.3-.3.8-.3 1.1 0l2.7 2.7c.5.5.1 1.3-.5 1.3H9.2v7.6h1.4c.7 0 1.1.8.6 1.3z"
			/>
		</svg>
	);
};
