import React from "react";
import useSWR from "swr";
import fetcher from "./lib/fetcher";
import Consistants from "./consistants";
import Container from "./components/common/container";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Treemap from "./components/treemap";
import Heatmap from "./components/heatmap";
import Bars from "./components/bars";

export default function App() {
  const { data, error } = useSWR(Consistants.api_baseurl + "/logs", fetcher);
  if (error || !data) {
    return <>Loading...</>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Container>
        <Treemap data={data} />
        <Heatmap data={data} />
        <Bars data={data} />
      </Container>
      <Footer />
    </div>
  );
}
