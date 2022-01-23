import Bar from "./bar";

export default function Bars({ data }) {
  const students = data.map((student) => <Bar key={student.name} student={student} />);

  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">{students}</div>;
}
