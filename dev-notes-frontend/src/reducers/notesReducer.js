export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_NOTES":
             return  action.notes
             
        default:
            return state
    }
}