const initState = [
    {title:'first task', done:true},
    {title:'second task', done:false}
];
export default (state=initState,action) => {
    // console.log(action);
    if(action.type === "ADD_TASK"){
        return [
            ...state,
            {title:action.payload, done:false}
        ];
    }
    return state;
};