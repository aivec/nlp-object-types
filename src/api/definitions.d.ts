import { OrganizationType } from 'src/models/organization-type';
import { ProvisionalMemberRegistrationStatus } from 'src/models/provisional-member-registration-status';
import { TenantRole } from 'src/models/tenant-role';

export interface GetDefinitionsResponse {
  organizationType: {
    [key: string]: OrganizationType;
  };
  provisionalMemberRegistrationStatus: {
    [key: string]: ProvisionalMemberRegistrationStatus;
  };
  tenantRole: {
    [key: string]: TenantRole;
  };
}
