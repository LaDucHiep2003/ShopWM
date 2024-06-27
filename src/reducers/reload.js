
const reloadReducer = (state = false, action) => {
    switch (action.type) {
        case "Reload":
            return (!state)
        default:
            return state
    }
    
}

export default reloadReducer;