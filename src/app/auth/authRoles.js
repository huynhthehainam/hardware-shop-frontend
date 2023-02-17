/**
 * Authorization Roles
 */
const authRoles = {
  sysAdmin: ['admin'],
  shopAdmin: ['shop-admin'],
  shopStaff: ['shop-staff'],
  staff: ['admin', 'staff'],
  user: ['admin', 'staff', 'user'],
  onlyGuest: [],
};

export default authRoles;
