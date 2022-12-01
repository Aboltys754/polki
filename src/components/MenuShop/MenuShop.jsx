import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css"
import { DropDown } from "../DropDown/DropDown";
import { InputSending } from "../InputSending/InputSending";


export const MenuShop = ({numReg}) => {

    return (
        <div className={styles.root}>
            <p>Магазин</p>
            <DropDown />
            <InputSending />
        </div>
        )
}