"use client";
import React, { FC, ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "animate.css";

interface MainLayoutInterface {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutInterface> = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};

export default MainLayout;
