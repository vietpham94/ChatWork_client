export class Common {
  public static PATHS = {
    home: '',
    profile: 'profile',
    login: 'login',
    register: 'register',
    resetPassword: 'reset-password'
  };

  public static KEYS = {
    token: 'token',
    email: 'email',
    password: 'password',
    confirm: 'confirm',
    profile: 'profile',
  };

  public static API = {
    login: '/api/login',
    signup: '/api/signup',
    userList: '/api/user',
    facebookLogin: '/api/social-signin/facebook',
    googleLogin: '/api/social-signin/google',
    logout: '/api/logout',
  };
}
