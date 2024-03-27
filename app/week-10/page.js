"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";
import NavBar from "../nav/nav-bar";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        {user ? (
          <div>
            <div>
              <h1>Week 8</h1>
            </div>
            <div>
              <p>Hi there! {user.displayName}</p>
            </div>
            <div>
              <Link
                href="/week-8/shopping-list">
                Shopping List
              </Link>
            </div>
            <div>
              <button
                onClick={firebaseSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h1>Week 8</h1>
            </div>
            <div>
              <p>Please sign in</p>
            </div>
            <div>
              <button
                onClick={gitHubSignIn}>
                Sign In with GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}