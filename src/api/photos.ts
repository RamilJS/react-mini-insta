export async function getPhotosByAlbumId(albumId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
  );
  if (!res.ok) throw new Error("Photos not found");
  return res.json();
}

export async function getAlbumById(albumId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`,
  );
  if (!res.ok) throw new Error("Album not found");
  return res.json();
}
