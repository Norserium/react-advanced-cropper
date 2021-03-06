import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const CenterIcon: FC<Props> = ({ className }) => {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<g fill="#FFF">
				<path d="M0 6.8h4.6v2.3H0zM11.4 6.8H16v2.3h-4.6zM8.1 10.1c-1.1 0-2.3-1-2.3-2.1s1-2.1 2.1-2.1S10 6.9 10 8c.2 1.1-.8 2.1-1.9 2.1zM6.8 0h2.3v4.6H6.8zM6.9 11.4h2.2V16H6.9z" />
			</g>
		</svg>
	);
};
