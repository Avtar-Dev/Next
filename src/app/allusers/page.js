import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/users");
  data = await data.json();
  return data;
}

const AllUsers = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>All Users List</h1>
      {users.map((items) => (
        <div
          className="flex gap-8 items-end justify-between w-60"
          key={items.id}>
          <div className="">
            <Link href={`allusers/${items.id}`}>{items.name}</Link>
          </div>
          <div className="flex gap-6">
            <Link className="border" href={`allusers/${items.id}/update`}>
              Edit
            </Link>
            <DeleteUser id={items.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
