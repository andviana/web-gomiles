import React from 'react';

interface RouteWithLayoutProps {
  layout?: React.ComponentType;
  element: React.ReactNode;
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({
  layout: Layout,
  element
}) => {
  if (Layout) {
    return (
      <Layout>
        {element}
      </Layout>
    );
  }
  return (<>{element}</>);
};

export default RouteWithLayout;



/*
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
*/
