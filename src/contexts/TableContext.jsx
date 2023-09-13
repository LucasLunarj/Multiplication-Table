import { createContext, useContext, useState } from "react";

export const TableContext = createContext(null)

export const TableContextProvider = ({ children }) => {
    const [tableData, setTableData] = useState([{ value: 0, display: false }])
    return (
        <TableContext.Provider value={{ tableData, setTableData }}>
            {children}
        </TableContext.Provider>
    )

}

export const useTableContext = () => useContext(TableContext)

