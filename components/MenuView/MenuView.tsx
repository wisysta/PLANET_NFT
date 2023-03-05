import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

export const MenuView = ({
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    return <View {...props}>{children}</View>;
};

const View = styled.div`
    width: 500px;
    padding: 24px;
    border-radius: 12px;
    background: #88888820;
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;
