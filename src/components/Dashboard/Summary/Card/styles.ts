import styled from 'styled-components';

type ContainerProps = {
	isTotal?: boolean;
};

export const Container = styled.article<ContainerProps>`
	min-height: 10rem;
	padding: 2rem;
	background-color: ${({ isTotal }) =>
		isTotal ? `var(--green)` : `var(--purple)`};
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transform: translateY(-50%);

	& > header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > h3 {
			color: ${({ isTotal }) =>
				isTotal ? `var(--dark-purple)` : `var(--title)`};
			font-weight: 400;
			font-size: 1rem;
		}

		& > img {
			height: 100%;
		}
	}

	& > section {
		& > p {
			color: ${({ isTotal }) => (isTotal ? `var(--purple)` : `var(--text)`)};
			font-size: 2.1rem;

			&.warning {
				color: var(--red) !important;
			}
		}
	}
`;
