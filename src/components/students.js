import Image from "next/image";

function Students({ allLogs }) {
  return (
    <section>
      <p>This is Students component.</p>
      <p>{ allLogs }</p>
    </section>
  )
}

Students.getInitialProps = async () => {
  const res = await fetch(process.env.API_URL + "/logs");
  const posts = await res.json();
  console.log(res);
  console.log(posts);

  return {allLogs: posts};
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + "/logs");
  const posts = await res.json();
  console.log(res);
  console.log(posts);

  return {
    props: {
      posts
    }
  };
}

export default Students;
