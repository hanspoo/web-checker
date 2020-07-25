import React from "react";
import { Card } from "antd";
import "../index.css";
import SitesList from "./SitesList";

export enum Status {
  NOTHING,
  LOADING,
  LOADED,
  ERROR,
}

export enum Result {
  NOTHING,
  UP,
  DOWN,
}

const WebChecker = ({ groups }: SitesGroup) => {
  if (groups.length == 0) return <p>No hay información</p>;

  return (
    <>
      {groups.map(({ name, sites }) => (
        <Card title={name}>
          {sites.length === 0 ? "Sin sitios" : <SitesList sites={sites} />}
        </Card>
      ))}
    </>
  );
};

export default WebChecker;
