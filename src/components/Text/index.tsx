import React from "react";
import { P } from "Styles/Text";

type Props = { text: string };

const Text = ({ text }: Props) => {
  return <P>{text}</P>;
};

export default Text;
