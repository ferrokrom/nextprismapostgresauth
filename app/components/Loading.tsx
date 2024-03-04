import React, { FC } from "react";
import { FallbackType } from "@/types";
import Spinner from "./Spinner";

type Props = {
  loaderType: FallbackType;
};

const Loading: FC<Props> = ({ loaderType, ...spinnerProps }) => {
  const modifiers = {
    item: loaderType === "item",
    page: loaderType === "page",
    screen: loaderType === "screen",
  };

  let content: JSX.Element | null;
  switch (loaderType) {
    case "item":
      // item and page same for now
      content = <Spinner {...spinnerProps} />;
      break;

    case "page":
      content = <Spinner {...spinnerProps} />;
      break;

    case "screen":
      content = <Spinner {...spinnerProps} />;
      break;

    case "test":
      content = <span data-testid="loading">Loading</span>;
      break;

    default:
      content = null;
      break;
  }

  return <div>{content}</div>;
};

export default Loading;
