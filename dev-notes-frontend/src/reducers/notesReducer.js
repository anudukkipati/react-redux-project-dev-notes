export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_NOTES":
             return  action.notes
        case "ADD_NOTE":
             return state.concat(action.note)
             
        default:
            return state
    }
}