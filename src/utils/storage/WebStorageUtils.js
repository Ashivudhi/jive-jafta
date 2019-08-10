const LocalStorageKeys = {
  USER_INFO: 'userMetaData',
  USER_TOKEN: 'userToken',
  IS_USER_NEW: 'isUserNew',
};

class WebStorageUtils {
  static saveUserInfo(body) {
    window.localStorage.setItem(LocalStorageKeys.USER_INFO, JSON.stringify(body));
  }

  static setUserAsNew() {
    window.localStorage.setItem(LocalStorageKeys.IS_USER_NEW, true);
  }

  static isUserNew() {
    return window.localStorage.getItem(LocalStorageKeys.IS_USER_NEW) || false;
  }

  static removeNewUserBool() {
    window.localStorage.removeItem(LocalStorageKeys.IS_USER_NEW);
  }

  static getUserInfo() {
    const item = window.localStorage.getItem(LocalStorageKeys.USER_INFO);
    return item ? JSON.parse(item) : {};
  }

  static saveUserToken(userToken) {
    window.localStorage.setItem(LocalStorageKeys.USER_TOKEN, userToken);
  }

  static getUserToken() {
    return window.localStorage.getItem(LocalStorageKeys.USER_TOKEN);
  }

  static savePageState(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getSavedPageState(key) {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }

  static clearPageState(key) {
    window.localStorage.removeItem(key);
  }

  static clear() {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
}

export default WebStorageUtils;
