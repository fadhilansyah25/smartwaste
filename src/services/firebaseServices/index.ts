import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ConfirmCode, AuthParams, FirestoreTypes} from './domain';

class FirebaseServices {
  firebaseAuthRegister(registerParams: AuthParams) {
    return auth().createUserWithEmailAndPassword(
      registerParams.email,
      registerParams.password,
    );
  }

  fireBaseAuthLogin(loginParams: AuthParams) {
    return auth().signInWithEmailAndPassword(
      loginParams.email,
      loginParams.password,
    );
  }

  verifyPhoneNumber(phoneNumber: string) {
    return auth().verifyPhoneNumber(phoneNumber);
  }

  confirmCode(confirmParams: ConfirmCode) {
    return auth.PhoneAuthProvider.credential(
      confirmParams.confirm.verificationId,
      confirmParams.code,
    );
  }

  firebaseCreateUser(UserData: FirestoreTypes.CreateUserParams) {
    return firestore().collection('User').add(UserData);
  }
}

export default new FirebaseServices();
