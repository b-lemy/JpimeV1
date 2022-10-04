

export const AppReducer = (state ,action) =>{

    switch (action.type) {

        case "REGISTER_USER":
            return true;
        case "LOGIN_USER":
            return false;

        default:
            return state;

    }

}