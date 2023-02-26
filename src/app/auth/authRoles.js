/**
 * Authorization Roles
 */
const authRoles = {
  sysAdmin: ['admin'],
  shopAdmin: ['shop-admin'],
  shopStaff: ['shop-staff', 'shop-admin'],
  staff: ['admin', 'staff'],
  user: ['admin', 'staff', 'user'],
  onlyGuest: [],
};

export default authRoles;
