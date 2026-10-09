import { logout } from "../actions";
export default function Page(){return <main>
    <h1>Protected Dashboard</h1>
    <div className="card">Դու մուտք ես գործել։</div>
    <form action={logout}>
        <button>Logout</button>
        </form>
    </main>}
