import {useState} from "react";

export const Content = () => {

    const [username,setUsername] = useState("Eric");
    const handleNameChange = () => {
        const names = ["Eric","Linda","Jane"];
        const index = Math.floor(Math.random() * 3);
        setUsername(names[index]);
    }
    const handleClick = () => {
        console.log("you clicked it");
    }

    const handleClick2 = (name) => {
        console.log(`${name} clicked it`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {username}
            </p>
            <button onClick={handleNameChange}>
                Change Name
            </button>
            <button onClick={() => { handleClick2(handleNameChange()) }}>
                Clicked
            </button>

            <button onClick={(e) => {
                handleClick3(e)
            }}>
                Clicked
            </button>
        </main>
    )
}

export default Content
