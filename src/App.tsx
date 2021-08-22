import React from "react";
import { connect } from "react-redux";
import { DefaultLayout } from './layout';
import { Router } from "react-router";
import store from "./store";
import { ConfigProvider } from "antd";
import "./App.css";
import { antd } from "./locale";

function App() {
  let language = 'zh_CN'
  const locale = antd(language);
  return (
    <ConfigProvider locale={locale}>
      <DefaultLayout />
    </ConfigProvider>
  );
}

export default App;
