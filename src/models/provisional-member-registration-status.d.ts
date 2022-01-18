import { ObjectId } from 'mongodb';

export interface ProvisionalMemberRegistrationStatus {
  id?: ObjectId;
  code: string;
  displayName: string;
}
