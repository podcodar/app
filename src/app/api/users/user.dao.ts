const users = [ { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },];

export async function getUserById(id: number) {
  const user = users.find((u) => u.id === id);
  return user;
}

export async function getAllUsers() {
  return users;
}
