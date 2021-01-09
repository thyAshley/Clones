import React from "react";
import { LoadingAttribute, LoadingComposition } from "./loading.type";

import { Spinner, LockBody, Picture, ReleaseBody } from "./styles";

const Loading: React.FC<LoadingAttribute> & LoadingComposition = ({
  src,
  ...restProps
}) => {
  console.log(src);
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody({ children, ...restProps }) {
  return <ReleaseBody {...restProps}>{children}</ReleaseBody>;
};

export default Loading;
