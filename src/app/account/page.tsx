'use client'


import { getSession, signOut, useSession } from "next-auth/react";

export default function User() {
  const session = useSession();
  return (
    <div>
      <h4>User session:</h4>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {/* <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button> */}
    </div>
  );
}

