import { FooterProps, HeaderProps } from "../../../utils/types";

export interface LayoutState {
  pageContentMargin: number;
  layoutProps: {
    headerProps: HeaderProps;
    footerProps: FooterProps;
  };
}
