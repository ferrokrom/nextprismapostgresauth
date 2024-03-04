import { FallbackType } from "@/types";
import React, { FC } from "react";

import { FallbackProps } from "react-error-boundary";
import ErrorCard from "./ErrorCard";
import { BiError } from "react-icons/bi";

export type ErrorFallbackProps = {
  fallbackType: FallbackType;
} & FallbackProps;

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
  fallbackType,
}) => {
  const modifiers = {
    item: fallbackType === "item",
    page: fallbackType === "page",
    screen: fallbackType === "screen",
  };
  return (
    <div role="alert">
      <ErrorCard
        title="Something went wrong"
        icon={<BiError />}
        message={
          <div>
            <span>UI:</span>
            <span>{fallbackType}</span>
            <span>Message:</span>
            <span data-testid="error-boundary">{error.message}</span>
          </div>
        }
        link={
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              resetErrorBoundary();
            }}
          >
            Try again
          </a>
        }
      />
    </div>
  );
};
export default ErrorFallback;
