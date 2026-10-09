import { login } from "../actions";
export default async function Page({searchParams}:{searchParams:Promise<{error?:string}>}){
  const {error}=await searchParams;
  return <main><h1>Login</h1>{error && <p>Սխալ login կամ password</p>}<form className="card" action={login}>
    <label>Username</label><input name="username" defaultValue="admin"/>
    <label>Password</label><input name="password" type="password" defaultValue="1234"/>
    <button>Մուտք</button>
  </form></main>
}
