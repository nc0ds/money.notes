import React, { InputHTMLAttributes, useCallback } from 'react';
import { currency } from './masks';

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
	mask: 'currency';
}

export const MaskedInput: React.FunctionComponent<MaskedInputProps> = ({
	mask,
	...props
}) => {
	const handleChange = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			if (mask === 'currency') return currency(e);
		},
		[mask]
	);

	return <input {...props} onChange={handleChange} />;
};
