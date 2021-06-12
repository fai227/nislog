import Head from "next/head";

export async function getStaticProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/logs");
  const body = await response.json();
  const items = body.Items;
  // console.log(items);

  return {
    props: {
      items,
    },
  };
}

export default function IndexPage({ items }) {
  return (
    <main>
      <h1>NISLOG</h1>

      <div>
        {items.map((item) => (
          <p key={item.index}>{item.j_full_name}</p>
        ))}
      </div>
    </main>
  );
}
