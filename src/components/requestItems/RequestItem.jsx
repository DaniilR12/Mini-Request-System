import { useDispatch, useSelector } from 'react-redux'
import s from './RequestItem.module.css'
import { changeStatus } from '../../store/slice/requestsSlice'

export const RequestItem = ({ id, title, description, status }) => {
  const dispatch = useDispatch()
  const role = useSelector((store) => store.requests.role)

  return (
    <div className={s.containerCard}>
      <div className={s.Card}>
        {role === "Manager" && (<span className={s.id}>ID: {id}</span>)}
        <h2 className={s.title}>{title}</h2>
        <div className={s.containerDescriptionStatus}>
          <p className={s.description}>
            {description}
          </p>
          {role === "Manager" ? (<>
            <span className={s.status}>
              Status: {status}
            </span>
            <div>
              <button
                className={s.changeStatusButton}
                onClick={() => dispatch(changeStatus(id))}
              >
                Change status
              </button>
            </div>

          </>) : (<span className={s.status}>
            status: {status}
          </span>)}
        </div>
      </div>
    </div>
  )
}
