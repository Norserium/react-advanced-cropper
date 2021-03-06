import React, { FC } from 'react';

interface Props {
	className?: string;
}

export const CircleStencilIcon: FC<Props> = ({ className }) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width="21.5"
			height="21.5"
			viewBox="-36.6 -2.3 21.5 21.5"
		>
			<circle
				fill="none"
				stroke="#FFF"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeDasharray="3.1408,3.1408"
				cx="-25.8"
				cy="8.5"
				r="10"
			/>
		</svg>
	);
};
