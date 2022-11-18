import { View } from "react-native";
import styled from "styled-components";
import { KeyedObject } from "../types";

const sizeVariant: KeyedObject = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant: KeyedObject = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
};

const getVariant = (position: string, size: string, theme: any) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];

    return `${property}:${value}`;
};

interface SpacerProps {
    position?: string;
    size?: string;
    children: any;
};

const Spacer = ({ position = 'top', size = 'small', children }: SpacerProps) => {
    const SpacerComponent = styled(View)`
  ${({ theme }) => getVariant(position, size, theme)}
`;

    return <SpacerComponent>{children}</SpacerComponent>;
};

export default Spacer;
