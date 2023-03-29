import auth from '@react-native-firebase/auth';

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
