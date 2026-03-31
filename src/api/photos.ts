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

export async function getPhotoById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

  if (!res.ok) {
    throw new Error("Photo not found");
  }

  return res.json();
}

export const getCommentsByPhotoId = async (photoId: string) => {
  const postId = Number(photoId) % 100 || 1;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  );

  if (!res.ok) throw new Error("Failed to fetch comments");

  return res.json();
};
