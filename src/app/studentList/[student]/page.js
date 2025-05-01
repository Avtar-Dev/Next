// "use client";

// import React from "react";

// const StudentDetail = ({ params }) => {

//   return (
//     <div>
//       <h1>Student Detail</h1>
//       <h3>Name: {params.student}</h3>
//     </div>
//   );
// };

// export default StudentDetail;

"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const StudentDetail = ({ params }) => {
  const searchParams = useSearchParams();
  const studentName = searchParams.get("name");
  console.log("studentName", searchParams);

  return (
    <div>
      <h1>Student Detail</h1>
      <h3>Name: {studentName || "Unknown"}</h3>
    </div>
  );
};

export default StudentDetail;
