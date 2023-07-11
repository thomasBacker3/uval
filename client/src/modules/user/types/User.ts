import Department from './Department';
import Platoon from './Platoon';
import { Rank } from './Rank';
import { UserReportData } from './UserReportData';

//!TODO update name to UserView/ create UserInput, UserUpdate ...
export interface User {
  id: string;
  number: number;
  name: string;
  lastName: string;
  middleName: string;
  rank: Rank;
  garrison: string;
  chatNickname: string;

  platoon: Platoon;
  department: Department;

  userReportData: UserReportData;
}
