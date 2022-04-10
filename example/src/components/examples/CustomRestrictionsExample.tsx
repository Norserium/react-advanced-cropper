import React, { useState, useRef } from 'react';
import { Cropper, CropperRef, getTransformedImageSize, retrieveSizeRestrictions } from 'react-advanced-cropper';
import { onInputChange } from '../..//service/react';
import './CustomRestrictionsExample.scss';

export const CustomRestrictionsExample = () => {
	const cropperRef = useRef<CropperRef>();
	const inputRef = useRef<HTMLInputElement>(null);
	const [src, setSrc] = useState(
		'https://images.unsplash.com/photo-1494205577727-d32e58564756?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
	);

	const [minWidth, setMinWidth] = useState<number>(50);
	const [maxWidth, setMaxWidth] = useState<number>();
	const [maxHeight, setMaxHeight] = useState<number>();
	const [minHeight, setMinHeight] = useState<number>();

	const percentsRestriction = (state, settings) => {
		const { minWidth, minHeight, maxWidth, maxHeight } = retrieveSizeRestrictions(settings);

		const imageSize = getTransformedImageSize(state);

		return {
			minWidth: (minWidth / 100) * imageSize.width,
			minHeight: (minHeight / 100) * imageSize.height,
			maxWidth: (maxWidth / 100) * imageSize.width,
			maxHeight: (maxHeight / 100) * imageSize.height,
		};
	};

	const onDownloadResult = () => {
		if (cropperRef.current) {
			const newTab = window.open();
			if (newTab) {
				newTab.document.body.innerHTML = `<img src="${cropperRef.current.getCanvas()?.toDataURL()}"/>`;
			}
		}
	};

	const onUpload = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const onLoadImage = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		if (target.files && target.files[0]) {
			const reader = new FileReader();
			reader.onload = (event) => {
				if (event.target) {
					setSrc(event.target.result as string);
				}
			};
			reader.readAsDataURL(target.files[0]);
		}
	};

	return (
		<div className="custom-restrictions-example">
			<Cropper
				ref={cropperRef}
				className="custom-restrictions-example__cropper"
				sizeRestrictions={percentsRestriction}
				src={src}
				minWidth={Number(minWidth)}
				minHeight={Number(minHeight)}
				maxWidth={Number(maxWidth)}
				maxHeight={Number(maxHeight)}
			/>
			<div className="custom-restrictions-example__panel">
				<div className="custom-restrictions-example__panel-left">
					<div className="custom-restrictions-example__input">
						<span className="custom-restrictions-example__input-label">Min width</span>
						<input
							value={minWidth || ''}
							onChange={onInputChange(setMinWidth)}
							className="custom-restrictions-example__input-control"
							type="number"
						/>
					</div>
					<div className="custom-restrictions-example__input">
						<span className="custom-restrictions-example__input-label">Min height</span>
						<input
							value={minHeight || ''}
							onChange={onInputChange(setMinHeight)}
							className="custom-restrictions-example__input-control"
							type="number"
						/>
					</div>
					<div className="custom-restrictions-example__input">
						<span className="custom-restrictions-example__input-label">Max width</span>
						<input
							value={maxWidth || ''}
							onChange={onInputChange(setMaxWidth)}
							className="custom-restrictions-example__input-control"
							type="number"
						/>
					</div>
					<div className="custom-restrictions-example__input">
						<span className="custom-restrictions-example__input-label">Max height</span>
						<input
							value={maxHeight || ''}
							onChange={onInputChange(setMaxHeight)}
							className="custom-restrictions-example__input-control"
							type="number"
						/>
					</div>
				</div>
				<div className="custom-restrictions-example__panel-right">
					<div className="custom-restrictions-example__button" onClick={onUpload}>
						<input
							className="custom-restrictions-example__file-input"
							ref={inputRef}
							type="file"
							accept="image/*"
							onChange={onLoadImage}
						/>
						Upload image
					</div>
					<div className="custom-restrictions-example__button" onClick={onDownloadResult}>
						Download result
					</div>
				</div>
			</div>
		</div>
	);
};