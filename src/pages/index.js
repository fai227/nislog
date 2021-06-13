import Student from "../components/student.js";

export async function getStaticProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/logs");
  const body = await response.json();
  const items = body.Items;
  // console.log(items);

  const logs = {};
  items.map((item) => {
    if (!logs[item.id]) {
      logs[item.id] = {};
      logs[item.id].j_full_name = item.j_full_name;
      logs[item.id].e_full_name = item.e_full_name;
      logs[item.id].logs = [];
    }
    logs[item.id].logs.push({ data: item.date, count: item.stay_duration });
  });

  return {
    props: {
      logs,
    },
  };
}

export default function IndexPage({ logs }) {
  return (
    <main>
      <h1>NISLOG</h1>

      <section>
        {Object.keys(logs).map((key) => (
          <Student log={logs[key]} />
        ))}
      </section>
    </main>
  );
}
