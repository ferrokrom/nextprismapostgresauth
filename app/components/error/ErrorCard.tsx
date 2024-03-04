import React, { FC, ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
  message: ReactNode;
  link: ReactNode;
};

const ErrorCard: FC<Props> = ({ title, icon, message, link }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div> {icon}</div>
        <div>{message}</div>
      </div>
      <div>{link}</div>
    </div>
  );
};

export default ErrorCard;
