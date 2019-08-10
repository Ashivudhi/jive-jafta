import firebase from 'firebase';
import gql from 'graphql-tag';
import WebStorageUtils from './storage/WebStorageUtils';

const GET_USER = gql`
  query users {
    users {
      name
      age
    }
  }
`;

const CREATE_USER = gql`
  mutation addUser($details: UserInput!) {
    addUser(details: $details) {
      name
      age
    }
  }
`;

class AuthenticationManager {
  static saveTokenToBrowser = async (apolloClient, data) => {
    const { userData, token } = data.login;
    WebStorageUtils.saveUserToken(token);
    WebStorageUtils.saveUserInfo(userData);
    // window.location.replace('/');
    
  };

  static async signUp(apolloClient, {
    name, age, email, password,
  }) {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const token = await user.getIdToken(true);
    WebStorageUtils.saveUserToken(token);
    const { data } = await apolloClient.mutate({
      mutation: CREATE_USER,
      variables: {
        details: {
          name,
          age,
        },
      },
    });
    WebStorageUtils.setUserAsNew();
    WebStorageUtils.saveUserInfo(data.createUserDetails);
    window.location.replace('/');
  }

  static signOut() {
    if (AuthenticationManager.isUserSignedIn() || window.localStorage.getItem('userToken')) {
      // Clear internal WebStorage to delete Blindfeed user's credentials'
      WebStorageUtils.clear();

      // Logout from Firebase
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch(() => {
          // An error happened.
        });
    }
  }

  static isUserSignedIn() {
    return (
      typeof firebase.auth().currentUser !== 'undefined' && firebase.auth().currentUser !== null
    );
  }

  static attachAuthChangesEventListener(callback) {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        WebStorageUtils.saveUserToken(token);
        callback(true, WebStorageUtils.isUserNew());
      } else {
        callback(false, false);
      }
    });
  }
}

export default AuthenticationManager;
