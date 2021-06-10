import Image from "next/image";

const api_url = process.env.NEXT_PUBLIC_API_URL + "/logs";
console.log(api_url);

function Students ({ data })  {
  return (
    <section>
      <p>Students component</p>
      <p>{ api_url }</p>
      <p>{ data }</p>
    </section>
  );
}

export async function getServerSideProps () {
  const res = await fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060');
  const data = await res.json();
  console.log(res);
  console.log(data);

  return { props: { data } };
}

export default Students;
