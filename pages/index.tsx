import styled from "@emotion/styled";

import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { MenuView } from "@/components";
import { Title } from "@/components/Title";
import { Button } from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className={styles.main}>
            <MainView>
                <MenuView>
                    <Title>CRYPTOSPACE</Title>
                    <Link href="/mint">
                        <MenuButton variant="outlined" size="large">
                            Minting Your Own Planet
                        </MenuButton>
                    </Link>
                    <Link href="/list">
                        <MenuButton variant="outlined" size="large">
                            View All Planets
                        </MenuButton>
                    </Link>
                </MenuView>
            </MainView>
        </div>
    );
};

const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const MenuButton = styled(Button)`
    margin: 4px;
    width: 100%;
`;

export default Home;
