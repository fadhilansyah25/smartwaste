import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type AuthParams = {
  email: string;
  password: string;
};

export type ConfirmCode = {
  confirm: FirebaseAuthTypess.PhoneAuthSnapshot;
  code: string;
};

export declare namespace FirestoreTypes {
  type CreateUserParams = {
    uid: string;
    fullName: string;
    birthDate: Date;
    address: string;
    provincesID: number;
    regencyID: number;
    districtID: number;
  };
}
