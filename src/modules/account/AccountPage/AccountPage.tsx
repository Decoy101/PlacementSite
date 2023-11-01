import { signOutUser } from "@/firebase";

function AccountPage() {
  const signOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <h1>Account</h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}
export default AccountPage;
