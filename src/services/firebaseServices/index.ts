import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/storage';
import {ConfirmCode, AuthParams, FirestoreTypes} from './domain';

class FirebaseServices {
  firebaseCheckCurrentUser() {
    return auth().currentUser;
  }

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

  firebaseLogout() {
    auth().signOut();
  }

  savePhotoToStorage = async (imageBlob: Blob) => {
    const timestamp = Date.now(); // Dapatkan tanda waktu saat ini
    const uniqueFileName = `${timestamp}.jpg`; // Nama file unik

    const imageRef = firebase.storage().ref(`images/${uniqueFileName}`);
    await imageRef.put(imageBlob);

    const imageUrl = await imageRef.getDownloadURL();
    return imageUrl;
  };
}

export default new FirebaseServices();
