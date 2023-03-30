import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

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
