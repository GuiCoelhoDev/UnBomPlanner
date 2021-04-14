import React from "react";

import { Container } from "./styles";

function LongButton({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default LongButton;
