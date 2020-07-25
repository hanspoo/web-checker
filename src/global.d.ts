type SitesGroup = {
  groups: SiteGroup[];
};

type SiteGroup = {
  name: string;
  sites: Site[];
};


type Site = {
  name: string;
  url: string;
  status: Status;
  result: Result;
};
