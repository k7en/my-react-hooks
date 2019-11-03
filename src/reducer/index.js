
const events = (style = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 1 ? 1 : state[length - 1 ].id + 1
            return [...state, { id:id, ...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELEZTE_ALL_EVENT':
            return []
        default:
            return state
    }
}