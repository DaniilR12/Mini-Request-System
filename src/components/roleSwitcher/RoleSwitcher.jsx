import { useDispatch, useSelector } from 'react-redux'
import s from './RoleSwitcher.module.css'
import { setRole } from '../../store/slice/requestsSlice'

export const RoleSwitcher = () => {
    const dispatch = useDispatch()
    const role = useSelector((state) => state.requests.role)

    const userOrManager = (roleValue) => {
        dispatch(setRole(roleValue))
    }

    return (
        <div className={s.containerRoleSwitcher}>
            <button onClick={() => userOrManager("User")} className={`${s.switchButton} ${role === "User" ? s.active : ""}`}>
                User
            </button>
            <button onClick={() => userOrManager("Manager")} className={`${s.switchButton} ${role === "Manager" ? s.active : ""}`}>
                Manager
            </button>
        </div>
    )
}