import { useState } from 'react'
import s from './RequestForm.module.css'
import { useDispatch } from 'react-redux'
import { addRequest } from '../../store/slice/requestsSlice'

export const RequestForm = () => {
  const [openForm, setOpenForm] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [titleError, setTitleError] = useState('')
  const [descError, setDescError] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    let hasError = false
    if (!title.trim()) {
      setTitleError('Поле не повинно бути порожнім')
      hasError = true
    } else {
      setTitleError('')
    }
    if (!description.trim()) {
      setDescError('Поле не повинно бути порожнім')
      hasError = true
    } else {
      setDescError('')
    }
    if (hasError) return

    dispatch(
      addRequest({
        title,
        description,
      })
    )

    setTitle('')
    setDescription('')
    setOpenForm(false)
  }

  return (
    <div className={s.containerRequestForm}>
      <div className={s.containerButton}>
        <button
          onClick={() => setOpenForm(!openForm)} className={s.addFormButton}>
           Подати заяву
        </button>
      </div>

      {openForm && (
        <div className={s.containerForm}>
          <form className={s.addForm} onSubmit={handleSubmit}>
            <h2>Форма створення заявки</h2>
            <div className={s.containerLabelInput}>
              <label className={s.labelInput}>
                Title
                <input value={title} onChange={(e) => setTitle(e.target.value)} className={s.inputs} type="text" />
                {titleError && (
                  <span className={s.error}>{titleError}</span>
                )}
              </label>
              <label className={s.labelInput}>
                Description
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
                {descError && (
                  <span className={s.error}>{descError}</span>
                )}
              </label>
            </div>
            <button className={s.createButton} type="submit">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  )
}