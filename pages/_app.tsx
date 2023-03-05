import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space } from "@/components";
import styled from "@emotion/styled";
import { SpaceContextProvider } from "@/contexts/useSpace";
import { Web3ContextProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Web3ContextProvider>
            <SpaceContextProvider>
                <Appview>
                    <SpaceWrapper>
                        <Space />
                    </SpaceWrapper>
                    <ComponentWrapper>
                        <Component {...pageProps} />
                    </ComponentWrapper>
                </Appview>
            </SpaceContextProvider>
        </Web3ContextProvider>
    );
}

const Appview = styled.div`
    width: 100%;
    height: 100%;
`;

const SpaceWrapper = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
`;

const ComponentWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
`;
