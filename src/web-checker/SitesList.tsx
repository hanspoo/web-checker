import React from "react";
import Site from "./Site";
type Props = {
  sites: Site[];
};
const SitesList = ({ sites }: Props) => (
  <>
    {sites.map((site) => (
      <Site {...site} />
    ))}
    <p>{`${sites.length} sitio${sites.length === 1 ? "" : "s"}`}</p>
  </>
);
export default SitesList;
