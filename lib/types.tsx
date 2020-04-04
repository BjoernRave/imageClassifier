import "next";
import "styled-components";
import { Client } from "urql";
import { borderRadiusType, boxShadowsType, colorType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorType;
    boxShadows: boxShadowsType;
    borderRadius: borderRadiusType;
  }
}

declare module "next" {
  export interface NextPageContext {
    urqlClient: Client;
  }
}
