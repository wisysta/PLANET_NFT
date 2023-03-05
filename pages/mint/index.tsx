import styled from "@emotion/styled";

import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { MenuView } from "@/components";
import { Title } from "@/components/Title";
import { Button } from "@mui/material";
import { use, useContext, useEffect, useState } from "react";
import { PlanetList } from "@/components/Planet";
import { SpaceContext, Web3Context } from "@/contexts";
import { useRouter } from "next/router";
import { usePlanetContract } from "@/hooks";
import BN from "bn.js";

const Mint: NextPage = () => {
    const router = useRouter();
    const { showPlanet, clearPlanet } = useContext(SpaceContext);
    const [planetIndex, setPlanetIndex] = useState(-1);
    const { web3 } = useContext(Web3Context);
    const { mintPlanet } = usePlanetContract(web3);

    const mint = async () => {
        if (!web3) return;

        const account = await web3.eth.requestAccounts();
        const currentAccount = account[0];

        mintPlanet({
            from: currentAccount,
            value: web3.utils.toWei(new BN(10), "milliether"),
        }).on("transactionHash", (txHash: string) => {
            router.push(`/mint/${txHash}`);
        });
    };

    const showRandomPlanet = () => {
        setPlanetIndex(Math.floor(Math.random() * PlanetList.length));
    };

    useEffect(() => {
        if (planetIndex >= 0) {
            showPlanet(PlanetList[planetIndex]);
        }

        return () => clearPlanet();
    }, [planetIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            showRandomPlanet();
        }, 1000);
        showRandomPlanet();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.main}>
            <MainView>
                <MenuView>
                    <Title>Mint Your Own Planet</Title>
                    <Description>
                        You can mint your planet by paying
                        <strong>0.01ETH</strong>
                    </Description>
                    <MenuButton variant="contained" size="large" onClick={mint}>
                        MINT
                    </MenuButton>
                    <MenuButton
                        variant="outlined"
                        size="large"
                        onClick={() => router.back()}
                    >
                        GO PREV
                    </MenuButton>
                </MenuView>
            </MainView>
        </div>
    );
};

const MainView = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Description = styled.div`
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    color: white;
    margin-bottom: 24px;
`;

const MenuButton = styled(Button)`
    margin: 4px;
    width: 100%;
`;

export default Mint;
