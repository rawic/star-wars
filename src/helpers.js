// import { store } from './redux/store';
// import Router from 'next/router';
// import { doSignIn } from './redux/actions/user.actions';
// import { generateRandomToken } from './utilities';

// export const handleLogin = (values) => {
//   if (
//     values.email === process.env.NEXT_PUBLIC_LOGIN &&
//     values.password === process.env.NEXT_PUBLIC_PASSWORD
//   )
//     return setSubmitting(false);

//   const token = generateRandomToken();
//   document.cookie = `token=${token}; path=/`;
//   store.dispatch(doSignIn());
//   Router.push('/dashboard');
// };
