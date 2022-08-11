import Header from "./header/header.component";
import React from "react";
import "../index.css";

export default function Layout({
  styleName = "",
  containerStyleName = "container-md",
  showFooter = true,
  children,
}) {
  return (
    <div className={`d-flex flex-column position-relative ${styleName}`}>
      <Header />
      <div className={`${containerStyleName}`}>{children}</div>
    </div>
  );
}
