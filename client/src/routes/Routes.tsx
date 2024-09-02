import { Route, Router, Switch } from "wouter";
import { lazy } from "react";
import Custom404 from "@/pages/Custom404";
import LazyComponent from "@/components/Common/LazyComponent";

const Home = LazyComponent(lazy(() => import("@/pages/Home")));

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <Custom404 />
        </Route>
      </Switch>
    </Router>
  );
}
