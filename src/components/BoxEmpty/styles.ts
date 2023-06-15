import styled from "styled-components/native";
import { BoxEmptyProps } from "../../types";

export const RequestsEmpty = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: .6rem;
`;

export const RequestsTitle = styled.View<BoxEmptyProps>`
	font-size: ${({ fontSize }) => fontSize ?? "24px"};
	font-weight: 600;
	line-height: 29px;
	text-align: center;
	word-wrap: break-word;
	width: 60vw;
	color: ${({ color }) => color ?? "#B2B3B5"};
`;
