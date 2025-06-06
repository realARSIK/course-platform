"use client"
import { ReactNode } from "react";
import { Layout } from "antd";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";

const { Content } = Layout;

const AppLayout = ({ 
  children 
}: { 
  children: ReactNode 
}) => {

  return (
    <Layout>
      <AppHeader/>
      <Content>{children}</Content>
      <AppFooter/>
    </Layout>
  )
}

export default AppLayout