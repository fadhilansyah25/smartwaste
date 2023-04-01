export type PersonalDataType = {
  fullName: string;
  birthDate: Date;
  address: string;
  provincesID: number;
  regencyID: number;
  districtID: number;
};

type ReducerAction = {
  type: 'Handle_Input';
  payload: Partial<PersonalDataType> | PersonalDataType[];
};

export const reducer = (state: PersonalDataType, action: ReducerAction) => {
  switch (action.type) {
    case 'Handle_Input':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
