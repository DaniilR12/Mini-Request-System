import s from "./RequestList.module.css"
import { RequestItem } from '../requestItems/RequestItem'
import { useSelector } from "react-redux"

export const RequestList = () => {
  const request = useSelector((store) => store.requests.requests)
  const filter = useSelector((store) => store.requests.filter)
  const role = useSelector((store) => store.requests.role)

  const filteredRequests =
    filter === "all" ? request : request.filter((r) => r.status === filter)

  return (
    <div className={s.containerList}>
      {role === "User" ? (
        request.map((req) => (
          <RequestItem
            key={req.id}
            id={req.id}
            title={req.title}
            description={req.description}
            status={req.status}
          />
        ))
      ) : (
        filteredRequests.map((req) => (
          <RequestItem
            key={req.id}
            id={req.id}
            title={req.title}
            description={req.description}
            status={req.status}
          />
        ))
      )}
    </div>
  )
}
