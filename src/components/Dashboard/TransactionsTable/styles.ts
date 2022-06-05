import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;

	& > table {
		width: 100%;
		border-spacing: 0 0.5rem;

		& > thead {
			& > tr {
				& > th {
					padding: 1rem;
					text-align: left;
					color: var(--white);
					font-weight: 400;
				}
			}
		}

		& > tbody {
			& > tr {
				background-color: var(--purple);

				& > td {
					color: var(--white);
					padding: 1rem;
					border: 0;

					&:first-of-type {
						border-top-left-radius: 6px;
						border-bottom-left-radius: 6px;
						color: var(--title);
					}

					&:last-of-type {
						border-top-right-radius: 6px;
						border-bottom-right-radius: 6px;
					}

					&.income {
						color: var(--green);
					}

					&.outcome {
						color: var(--red);
					}
				}
			}
		}
	}

	& > p {
		color: var(--title);
		font-size: 0.8rem;
		text-align: center;
	}
`;
