import React from "react";

import { Header } from "./styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function SectionHeader({ pageName, history }) {
  return (
    <Header>
      <span onClick={() => history.goBack()} className="back-link">
        <ArrowBackIcon />
        Voltar
      </span>
      <p className="subtitle">{pageName}</p>
    </Header>
  );
}

export default SectionHeader;
