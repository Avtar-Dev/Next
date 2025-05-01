// "use client";

// import Link from "next/link";
// import React from "react";

// const studentList = () => {
//   const paths = [
//     {
//       name: "Anil",
//       path: "/studentList/1",
//     },
//     {
//       name: "Rakesh",
//       path: "/studentList/2",
//     },
//     {
//       name: "Nitin",
//       path: "/studentList/3",
//     },
//     {
//       name: "Rahul",
//       path: "/studentList/4",
//     },
//     {
//       name: "Kane",
//       path: "/studentList/5",
//     },
//   ];
//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         {paths.map((item) => {
//           return (
//             <li key={item.path}>
//               <Link href={item.path}>{item.name}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default studentList;

"use client";

import Link from "next/link";
import React from "react";

const StudentList = () => {
  const students = [
    { id: "1", name: "Anil" },
    { id: "2", name: "Rakesh" },
    { id: "3", name: "Nitin" },
    { id: "4", name: "Rahul" },
    { id: "5", name: "Kane" },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/studentList/${student.id}?name=${student.name}`}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
