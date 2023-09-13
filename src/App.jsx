import { Page } from './components/page'
import { TableContextProvider } from './contexts/TableContext'
export const App = () => {
  return (
    <>
      <TableContextProvider>
        <Page />
      </TableContextProvider>
    </>
  )
}