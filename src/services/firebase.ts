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
