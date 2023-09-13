
import { useState } from 'react'
import { useTableContext } from '../contexts/TableContext'
import styles from './NumberSelect.module.css'
export const NumberSelect = () => {
    const context = useTableContext()
    const [tableNumber, setTableNumber] = useState(0)
    console.log(context.tableData.value)


    function handleGenerate(event) {
        event.preventDefault()
        if (tableNumber > 0) {
            context.setTableData({ ...context.tableData, value: tableNumber, display: true })

        } else {
            context.setTableData({ ...context.tableData, value: tableNumber, display: false })

        }


        setTableNumber(0)
    }


    function handleGetValue(e) {
        setTableNumber(e.target.value)

    }


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form onSubmit={handleGenerate} action="">
                    <label htmlFor="number">Number:</label>
                    <input onChange={handleGetValue} value={tableNumber} type="number" name="" id="number" />
                    <input disabled={tableNumber == 0} type="submit" value="Generate" />
                </form>
            </div>
        </div>
    )
}