import styled from "styled-components";
import { Text as NativeText } from "react-native";
import { KeyedObject } from "../types";

const defaultTextStyles = (theme: any) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: any) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants: KeyedObject = {
    body,
    label,
    caption,
    error,
    hint,
};

interface TextProps {
    variant?: string;
    children: any;
};

const Text = ({ variant = "body", children }: TextProps) => {
    const TextComponent = styled(NativeText)`
    ${({ theme }) => defaultTextStyles(theme)}
    ${({ theme }) => variants[variant](theme)}
  `;

    return <TextComponent>{children}</TextComponent>;
}

export default Text;
