interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['SEO Specialist'],
  customerRoles: [],
  tenantRoles: ['Marketing Manager', 'SEO Specialist', 'Content Creator'],
  tenantName: 'Organization',
  applicationName: 'Blog Generator',
  addOns: ['chat', 'notifications', 'file'],
};
