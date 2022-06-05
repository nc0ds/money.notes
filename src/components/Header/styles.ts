import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	min-height: 15rem;
	background-color: var(--dark-purple);
	padding: 2rem 0;

	& > div {
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > button {
			padding: 0.8rem 2rem;
			background-color: var(--purple);
			border: none;
			border-radius: 0.3rem;
			color: var(--white);
			font-weight: 500;
			transition: 0.2s ease-in-out;

			&:hover {
				filter: brightness(0.8);
			}
		}
	}
`;
