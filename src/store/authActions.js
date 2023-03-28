export const LogIn='LOGIN'
export const LogOut='LOGOUT'

export function logIn({uid,displayName,email,photoURL}) {
    return {
      type: LogIn,
      uid,displayName,email,photoURL
    };
  }
export function logOut() {
    return {
      type: LogOut,
    };
  }
