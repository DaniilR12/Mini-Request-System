import { useSelector } from 'react-redux'
import './App.css'
import { RoleSwitcher } from './components/roleSwitcher/RoleSwitcher'
import { UserView } from './views/UserView'
import { ManagerView } from './views/managerView/ManagerView'

function App() {

  const role = useSelector((store) => store.requests.role)

  return (
    <>
      <RoleSwitcher />

      {role === "User" ? (<UserView />) : (<ManagerView />)}

    </>)
}

export default App
