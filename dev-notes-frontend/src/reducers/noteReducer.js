export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_NOTE":
             return  action.note
             
        default:
            return state
    }
}