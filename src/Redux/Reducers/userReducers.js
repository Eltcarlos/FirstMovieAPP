import * as UserConstants from '../Constants/userConstants';

// LOGIN

export const userLoginReducer = (state = {}, action) =>{
    switch (action.type) {
        case UserConstants.USER_LOGIN_REQUEST:
            return { isLoading : true};
        case UserConstants.USER_LOGIN_SUCCESS:
            return { isLoading : false, userInfo: action.payload, isSuccess: true};
        case UserConstants.USER_LOGIN_FAIL:
            return { isLoading : true, isError: action.payload};
        case UserConstants.USER_LOGIN_RESET:
            return {};   
        case UserConstants.USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

// REGISTER

export const userRegisterReducer = (state = {}, action) =>{
    switch (action.type) {
        case UserConstants.USER_REGISTER_REQUEST:
            return { isLoading : true};
        case UserConstants.USER_REGISTER_SUCCESS:
            return { isLoading : false, userInfo: action.payload, isSuccess: true};
        case UserConstants.USER_REGISTER_FAIL:
            return { isLoading : true, isError: action.payload};
        case UserConstants.USER_REGISTER_RESET:
            return {};   
        default:
            return state;
    }
}

// UPDATE PROFILE

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_UPDATE_PROFILE_REQUEST:
            return { isLoading : true};
        case UserConstants.USER_UPDATE_PROFILE_SUCCESS:
            return { isLoading : false, userInfo: action.payload, isSuccess: true};
        case UserConstants.USER_UPDATE_PROFILE_FAIL:
            return { isLoading : true, isError: action.payload};
        case UserConstants.USER_UPDATE_PROFILE_RESET:
            return {};   
        default:
            return state;
    }
}

// DELETE PROFILE

export const userDeleteProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_DELETE_PROFILE_REQUEST:
            return { isLoading : true};
        case UserConstants.USER_DELETE_PROFILE_SUCCESS:
            return { isLoading : false, userInfo: action.payload, isSuccess: true};
        case UserConstants.USER_DELETE_PROFILE_FAIL:
            return { isLoading : true, isError: action.payload};
        case UserConstants.USER_DELETE_PROFILE_RESET:
            return {};   
        default:
            return state;
    }
}

// CHANGE PASSWORD

export const userChangePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.USER_CHANGE_PASSWORD_REQUEST:
            return { isLoading : true};
        case UserConstants.USER_CHANGE_PASSWORD_SUCCESS:
            return { isLoading : false, isSuccess: true, message: action.payload.message};
        case UserConstants.USER_CHANGE_PASSWORD_FAIL:
            return { isLoading : true, isError: action.payload };
        case UserConstants.USER_CHANGE_PASSWORD_RESET:
            return {};   
        default:
            return state;
    }
}

// GET FAVORITE MOVIES

export const userGetFavoriteMoviesReducer = (state = {likedMovies: []}, action) => {
    switch (action.type) {
        case UserConstants.GET_FAVORITE_MOVIES_REQUEST:
            return { isLoading : true};
        case UserConstants.GET_FAVORITE_MOVIES_SUCCESS:
            return { isLoading : false, likedMovies: action.payload};
        case UserConstants.GET_FAVORITE_MOVIES_FAIL:
            return { isLoading : true, isError: action.payload };
        case UserConstants.GET_FAVORITE_MOVIES_RESET:
            return {};   
        default:
            return state;
    }
}

// DELETE ALL FAVORITE MOVIES

export const userDeleteFavoriteMoviesReducer = (state = {likedMovies: []}, action) => {
    switch (action.type) {
        case UserConstants.DELETE_FAVORITE_MOVIES_REQUEST:
            return { isLoading : true};
        case UserConstants.DELETE_FAVORITE_MOVIES_SUCCESS:
            return { isLoading : false, likedMovies: action.payload};
        case UserConstants.DELETE_FAVORITE_MOVIES_FAIL:
            return { isLoading : true, isError: action.payload };
        case UserConstants.DELETE_FAVORITE_MOVIES_RESET:
            return {};   
        default:
            return state;
    }
}

// ADMIN GET ALL USERS

export const adminGetAllUsersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case UserConstants.GET_ALL_USERS_REQUEST:
            return { isLoading : true};
        case UserConstants.GET_ALL_USERS_SUCCESS:
            return { isLoading : false, users: action.payload};
        case UserConstants.GET_ALL_USERS_FAIL:
            return { isLoading : true, isError: action.payload };
        case UserConstants.GET_ALL_USERS_RESET:
            return {
                users: [],
            };   
        default:
            return state;
    }
}

// ADMIN DELETE USER 

export const adminDeleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.DELETE_USER_REQUEST:
            return { isLoading : true};
        case UserConstants.DELETE_USER_SUCCESS:
            return { isLoading : false, users: action.payload};
        case UserConstants.DELETE_USER_FAIL:
            return { isLoading : true, isError: action.payload };
        case UserConstants.DELETE_USER_RESET:
            return {};   
        default:
            return state;
    }
}

// USER LIKE MOVIE

export const userLikeMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case UserConstants.LIKE_MOVIE_REQUEST:
            return { isLoading : true};
        case UserConstants.LIKE_MOVIE_SUCCESS:
            return { isLoading : false, isSuccess: true};
        case UserConstants.LIKE_MOVIE_FAIL:
            return { isLoading : true, isError: action.payload };
        case UserConstants.LIKE_MOVIE_RESET:
            return {};   
        default:
            return state;
    }
}