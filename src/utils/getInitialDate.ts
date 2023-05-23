const date = new Date();

export const today = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  12,
  0,
  0,
);

export const tomorrow = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() + 1,
  12,
  0,
  0,
);

export const minBirthday = new Date(
  date.getFullYear() - 15,
  date.getMonth(),
  date.getDate() + 1,
  12,
  0,
  0,
);

export const maximumPickupDate = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate() + 4,
  12,
  0,
  0,
);

export const initialTime = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  8,
  0,
  0,
);

export const maximumTime = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  16,
  0,
  0,
);
