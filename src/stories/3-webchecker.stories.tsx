import { addDecorator } from "@storybook/react";
import WebChecker, { Status, Result } from "../web-checker/WebChecker";
import Site from "../web-checker/Site";
import React from "react";
import { List, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const Decorator = (story: any) => (
  <Layout>
    <Content>{story()}</Content>
  </Layout>
);

export default {
  title: "WebChecker",
};

const rootStyle: React.CSSProperties = {
  backgroundColor: "#F0F0F0",
  color: "#000000",
  padding: "1rem",
};
addDecorator(Decorator);

const groups: SiteGroup[] = [];
const chileVacio: SiteGroup = {
  name: "Chile",
  sites: [],
};

const googleChile: Site = {
  name: "Google chile",
  status: Status.NOTHING,
  result: Result.NOTHING,
  url: "http://www.google.cl",
};
const chileUnSitio: SiteGroup = { ...chileVacio, sites: [googleChile] };

export const sinNada: React.SFC<{}> = () => <WebChecker groups={groups} />;
export const UnGrupoSinSitios: React.SFC<{}> = () => (
  <WebChecker groups={[chileVacio]} />
);
export const UnGrupoUnSitio: React.SFC<{}> = () => (
  <WebChecker groups={[chileUnSitio]} />
);

export const SitioQAChile: React.SFC<{}> = () => (
  <List>
    <Site {...googleChile} />
  </List>
);
