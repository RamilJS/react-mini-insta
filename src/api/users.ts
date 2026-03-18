export async function getUserById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("User not found");
  }

  return res.json();
}
