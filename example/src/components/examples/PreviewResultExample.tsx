import React, { useRef, useState } from 'react';
import {
	CropperRef,
	Cropper,
	CropperPreview,
	CropperImage,
	CropperState,
	CropperTransitions,
} from 'react-advanced-cropper';
import './PreviewResultExample.scss';
import { SquareButton } from '../../components/examples/components/SquareButton';
import { RotateLeftIcon } from '../../components/icons/RotateLeftIcon';

export const PreviewResultExample = () => {
	const cropperRef = useRef<CropperRef>(null);

	const [state, setState] = useState<CropperState | null>(null);
	const [image, setImage] = useState<CropperImage | null>(null);
	const [transitions, setTransitions] = useState<CropperTransitions>();

	const [src] = useState(
		'/react-advanced-cropper/img/images/photo-1623432532623-f8f1347d954c.jpg',
	);

	const onChange = (cropper: CropperRef) => {
		setState(cropper.getState());
		setImage(cropper.getImage());
	};

	const onTransitionsChange = (cropper: CropperRef) => {
		setTransitions(cropper.getTransitions());
	};

	const onRotate = () => {
		if (cropperRef.current) {
			cropperRef.current.rotateImage(90);
		}
	};

	return (
		<div className={'preview-result-example'}>
			<Cropper
				ref={cropperRef}
				className={'preview-result-example__cropper'}
				stencilProps={{ aspectRatio: 1 }}
				src={src}
				onChange={onChange}
				onTransitionsStart={onTransitionsChange}
				onTransitionsEnd={onTransitionsChange}
			/>
			<div className="preview-result-example__previews">
				<CropperPreview
					className="preview-result-example__preview"
					image={image}
					state={state}
					transitions={transitions}
				/>
				<CropperPreview
					className="preview-result-example__preview preview-result-example__preview--small"
					state={state}
					image={image}
					transitions={transitions}
				/>
			</div>
			<div className="preview-result-example__buttons">
				<SquareButton className="preview-result-example__button" title="Rotate" onClick={onRotate}>
					<RotateLeftIcon />
				</SquareButton>
			</div>
		</div>
	);
};
