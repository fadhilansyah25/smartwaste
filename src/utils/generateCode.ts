import {v4 as uuidv4} from 'uuid';

export function generateUniqueCode() {
  const prefix = 'SYW';
  const uuid = uuidv4();
  const code = prefix + uuid.substring(0, 6);

  return code;
}
