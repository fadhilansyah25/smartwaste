import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const firebaseAuthRegister = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const verifyPhoneNumber = (phoneNumber: string) => {
  return auth().verifyPhoneNumber(phoneNumber);
};

export const confirmCode = (
  confirm: FirebaseAuthTypes.PhoneAuthSnapshot,
  code: string,
) => {
  return auth.PhoneAuthProvider.credential(confirm.verificationId, code);
};

export const firebaseCreateUser = (UserData: {
  fullName: string;
  birthDate: Date;
  address: string;
  provincesID: number;
  regencyID: number;
  districtID: number;
}) => {
  return firestore().collection('User').add(UserData);
};
