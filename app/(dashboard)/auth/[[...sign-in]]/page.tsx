// () for grouping so dashboard will not be in the route name.
// **Difference between [...sign-in] and [[...sign-in]] that second one uses sign-in page for the parent(in this case auth),
// if auth page doesn't have it's own page.tsx.
// **This will be only applied the first parent though, for example if auth had a parent name main, main route wouldn't use this file as it's page.

const SignInPage = ({ params }: any) => {
  // Params will be { 'sign-in': [ 'sign-in' ] } for route /auth/sign-in and { 'sign-in': [ 'sign-in', 'user', '122' ] } for the route /auth/sign-in/user/122
  console.log('params', params);

  return <div className='text-7xl'>SignInPage</div>;
};

export default SignInPage;
