import React from "react";
import styles from "./styles.module.css"
import { MenuChannels } from "../MenuChannels/MenuChannels";
import { MenuShop } from "../MenuShop/MenuShop";



export const App = () => {
    return (
    <form>
        <MenuShop />
        <MenuChannels numReg={12} />
        <MenuChannels numReg={13} />
    </form>);
};