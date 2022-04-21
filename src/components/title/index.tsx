import React from "react";
import { Heading } from "Styles/Title";

type Props = { text: string };

const Title = ({ text }: Props) => {
  return <Heading>{text}</Heading>;
};

export default Title;
