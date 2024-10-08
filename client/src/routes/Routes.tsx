import { Route, Router, Switch } from "wouter";
import { lazy } from "react";
import { ERoutes } from "./definitions";
import Custom404 from "@/pages/Custom404";
import LazyComponent from "@/components/Common/LazyComponent";
import ProductDetail from "@/pages/Product/ProductDetail";
import ProductAddNew from "@/pages/Product/ProductAddNew";
import Layout from "@/components/Common/Layout";

const Home = LazyComponent(lazy(() => import("@/pages/Home")));

export default function Routes() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path={ERoutes.HOME} component={Home} />
          <Route path={ERoutes.PRODUCT_ADD_NEW} component={ProductAddNew} />
          <Route path={ERoutes.PRODUCT_DETAIL} component={ProductDetail} />
          <Route>
            <Custom404 />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
