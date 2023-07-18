const mapping: Record<string, string> = {
  ads: 'ad',
  blogs: 'blog',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
