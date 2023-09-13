import React from "react";

const students = [
  { id: 1, name: "MinKyung" },
  { id: 2, name: "HanSol" },
  { id: 3, name: "HyunSoo" },
  { id: 4, name: "JungGeun" },
];

const AttendanceBook = (props) => {
  return (
    <ul>
      {students.map((student) => {
        return <li>{student.name}</li>;
      })}
    </ul>
  );
};

export default AttendanceBook;
