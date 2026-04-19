import s from "./Filter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../store/slice/requestsSlice"


export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.requests.filter)

    return (
        <select
            value={filter}
            className={s.filter}
            onChange={(e) => dispatch(setFilter(e.target.value))}
        >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
        </select>
    )
}