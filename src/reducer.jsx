export const initialState ={
    user:null,
    playlist:[],
    playing:false,
    item : null,
    token : null,
};
 
export const reducer = (state ,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists :action.playlists
            }
        case "SET_TOP_HITS":
            return{
                ...state,
                top_hits : action.top_hits
            }
        
        
        
        default:
            return state;
    }

}
