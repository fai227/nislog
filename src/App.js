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
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const validTypes = ["treemap", "heatmap", "bars"];

  if (error || !data) {
    return (
      <div className="h-screen flex items-center">
        <div className="mx-auto w-[120px]">
          <img src="/assets/nislog-logo.png" alt="nislog" width={1169} height={1169} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Container>
        {validTypes.includes(type) ? (
          <>
            {type === "treemap" && <Treemap data={data} />}
            {type === "heatmap" && <Heatmap data={data} />}
            {type === "bars" && <Bars data={data} />}
          </>
        ) : (
          <>
            <Treemap data={data} />
            <Heatmap data={data} />
            <Bars data={data} />
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
}
