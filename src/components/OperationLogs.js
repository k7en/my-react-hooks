import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext';

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return (
    <React.Fragment>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>操作</td>
            <td>日時</td>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operation, index) => (
              <tr key={index}>
              <td>{operation.description}</td>
              <td>{operation.operatedAt}</td>
            </tr>            
          ))}
        </tbody>

      </table>
    </React.Fragment>
  )
}

export default OperationLogs