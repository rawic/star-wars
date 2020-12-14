import { generateRandomToken } from '../utilities';

export const userService = {
  login,
  logout,
};

function login(username, password) {
  return new Promise((resolve, reject) => {
    if (
      username !== process.env.NEXT_PUBLIC_LOGIN ||
      password !== process.env.NEXT_PUBLIC_PASSWORD
    )
      reject('Nope Sir. Try again');

    const token = generateRandomToken();
    document.cookie = `token=${token}; path=/`;
    resolve(username);
  });
}

function logout() {
  document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}
