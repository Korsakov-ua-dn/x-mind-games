import React from "react";
import styled from "styled-components";

type PropTypes = {
  readonly imgComponent: any;
};

const PreloadImg: React.FC<PropTypes> = ({ imgComponent }) => (
  <Styled imgComponent={imgComponent} />
);

export default React.memo(PreloadImg);

const Styled = styled.div<PropTypes>`
  position: absolute;
  background-image: url(${(props) => props.imgComponent});
  opacity: 0;
`;
