import './App.css';

export default function App() {

    return (
        <div>
            <h1>Frontend</h1>
            <form method="post" action="/students">
                <div>
                    <input name="name" type="text" id="name" />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

