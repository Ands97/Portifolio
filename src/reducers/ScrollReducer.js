const initialState = window.scrollTo(0,0);

export default (state = initialState, action = {})=>{
    switch(action.type){
        case 'scrollHome':
            return {state: window.scrollTo({top: 0, left: 0, behavior:'smooth'})}
        break;
        case 'scrollAbout':
            return {state: window.scrollTo({top: 600, left: 0, behavior:'smooth'})}
        break;
        case 'scrollProjects':
            return {state: window.scrollTo({top: 1100, left: 0, behavior:'smooth'})}
        break;
        case 'scrollContacts':
            return {state: window.scrollTo({top: 2374, left: 0, behavior:'smooth'})}
        break;
    }

    return state
}