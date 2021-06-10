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

export default Students;
