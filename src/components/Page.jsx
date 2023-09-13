import { useState } from 'react';
import { useTableContext } from '../contexts/TableContext';
import { NumberSelect } from './NumberSelect'
import styles from './Page.module.css'
export const Page = () => {
    const context = useTableContext();
    const multiplicationTable = ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    console.log(context.tableData.display)


    return (
        <div className={styles.container}>
            <h1>Multiplication Table</h1>
            <NumberSelect />
            <div className={styles.content}>

                <div className={styles.tableBox}>
                    {context.tableData.display === true ? multiplicationTable.map((item, index) =>
                        <p key={index}>
                            {`${context.tableData.value} X ${item} = ${context.tableData.value * item} `}
                        </p>) : null}
                </div>
            </div>
        </div>
    )
}