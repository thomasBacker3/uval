import { User } from '../types/User';

const getLastNameWithInitials = (user: User) =>
  `${user.lastName} ${user.name.slice(0, 1)}. ${user.middleName.slice(0, 1)}.`;

export default getLastNameWithInitials;
