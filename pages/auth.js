import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  return <AuthForm />;
}

export async function getServerSideProps(ctx) {
  const session = await getSession({ req: ctx.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default AuthPage;
