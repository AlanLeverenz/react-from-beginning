const initState = {openClose: "closed",content: ""};

export default(state = initState, action)=>{
    if(action.type === "OPEN_MODAL"){
        console.log(`OPEN_MODEL ${action.payload.content}`);
        return action.payload;
    }
    // console.log(this.state.openClose);
    return state
}