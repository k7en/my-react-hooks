import React, { useState, useContext } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions'

import AppContext from '../contexts/AppContext'

const EventForm = () => {
  const {state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()
    console.log("addEvent")
    dispatch({
      type: CREATE_EVENT,
      title, body
    })
    setTitle('')
    setBody('')
  }
  const deleteALlEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除します。よろしいですか？')
    if (result) {
      dispatch({ type: DELETE_ALL_EVENT })
    }
  }
  const unCreatable = title === '' || body === ''


  return (
    <React.Fragment>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}  >イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteALlEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
      </form>

    </React.Fragment>
  )
}

export default EventForm