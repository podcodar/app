import { Container } from "@/shared/components";

type Status = "active" | "inactive";

type Role = "admin" | "user";

type User = {
  id: string;
  name: string;
  email: string;
  status: Status;
  role: Role;
};

// list with 6 random Users generated
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@doe.co",
    status: "active",
    role: "admin",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane@doe.co",
    status: "active",
    role: "admin",
  },
  { id: "3", name: "John Doe", email: "", status: "inactive", role: "user" },
  { id: "4", name: "Jane Doe", email: "", status: "inactive", role: "user" },
  { id: "5", name: "John Doe", email: "", status: "inactive", role: "user" },
  { id: "6", name: "Jane Doe", email: "", status: "inactive", role: "user" },
  { id: "3", name: "John Doe", email: "", status: "inactive", role: "user" },
  { id: "4", name: "Jane Doe", email: "", status: "inactive", role: "user" },
  { id: "5", name: "John Doe", email: "", status: "inactive", role: "user" },
  { id: "6", name: "Jane Doe", email: "", status: "inactive", role: "user" },
  { id: "3", name: "John Doe", email: "", status: "inactive", role: "user" },
  { id: "4", name: "Jane Doe", email: "", status: "inactive", role: "user" },
  { id: "5", name: "John Doe", email: "", status: "inactive", role: "user" },
  { id: "6", name: "Jane Doe", email: "", status: "inactive", role: "user" },
];

export default function Dashboard() {
  return (
    <Container className="w-full grid p-8 gap-8">
      <div className="header flex w-full justify-between">
        <div className="flex-1">
          <h2 className="text-xl">Inscrito</h2>
          <p className="text-sm text-gray-500">
            Lista de todos os inscritos pelo formulário da PodCodar
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add new user
        </button>
      </div>

      <div className="content">
        <table className="table w-full">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b-2 px-4 py-2">{user.name}</td>
                <td className="border-b-2 px-4 py-2">{user.email}</td>
                <td className="border-b-2 px-4 py-2">{user.status}</td>
                <td className="border-b-2 px-4 py-2">{user.role}</td>
                <td className="border-b-2 gap-2">
                  <button className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded">
                    edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
