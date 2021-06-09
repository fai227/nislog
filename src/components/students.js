import Image from "next/image";

function Students({ posts }) {
  return (
    <section>
      <p>This is Students component.</p>
      <p>{posts}</p>
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL + "/logs");
  const posts = await res.json();
  console.log(posts);

  return {
    props: {
      posts
    }
  };
}

export default Students;
