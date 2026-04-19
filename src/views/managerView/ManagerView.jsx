import { RequestList } from '../../components/requestList/RequestList'
import { Filter } from '../../components/filter/Filter.jsx'
import s from "./ManagerView.module.css"

export const ManagerView = () => {
    return (
        <>
            <div className={s.containerFilter}>
                <Filter />
            </div>
            <RequestList />
        </>
    )
}
