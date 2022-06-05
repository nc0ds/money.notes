import React from 'react';

export const currency = (e: React.FormEvent<HTMLInputElement>) => {
	e.currentTarget.maxLength = 15;

	let value = e.currentTarget.value;

	let onlyNum = value.replace(/\D/gim, '');

	if (Number(onlyNum) < 10) {
		while (onlyNum.charAt(0) === '0') {
			onlyNum = onlyNum.replace(onlyNum.charAt(0), '');
		}

		onlyNum = '00' + onlyNum;
	}

	if (Number(onlyNum) >= 10 && Number(onlyNum) < 100) {
		while (onlyNum.charAt(0) === '0') {
			onlyNum = onlyNum.replace(onlyNum.charAt(0), '');
		}

		onlyNum = '0' + onlyNum;
	}

	if (Number(onlyNum) >= 100) {
		while (onlyNum.charAt(0) === '0') {
			onlyNum = onlyNum.replace(onlyNum.charAt(0), '');
		}
	}

	value = onlyNum.replace(/(\d)(\d{2})$/, '$1,$2');
	value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

	if (onlyNum.length > 0) {
		value = `R$ ${value}`;
	}

	if (value === 'R$ 00') {
		value = '';
	}

	e.currentTarget.value = value;
	return e;
};
