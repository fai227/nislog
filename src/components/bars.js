import Bar from "./bar";

export default function Bars({ data }) {
  const students = data.map((student) => <Bar key={student.name} student={student} />);

  return (
    <div className="p-1 mx-1 lg:p-2 lg:mx-2 my-6 bg-white">
      <h2 className="text-center mt-4 text-xl">Bar Charts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">{students}</div>
    </div>
  );
}
