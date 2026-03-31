// export async function getAlbumsByUserId(userId: string) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
//   );
//   if (!res.ok) {
//     throw new Error("Albums not found");
//   }
//   return res.json();
// }

// api/albums.ts
export async function getAlbumsByUserId(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );
  if (!res.ok) throw new Error("Albums not found");
  return res.json();
}
