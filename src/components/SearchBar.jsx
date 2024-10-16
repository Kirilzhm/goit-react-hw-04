import { useState } from "react";
import toast from "react-hot-toast";

const SearchBtn = ({ onSubmit }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (query.trim() === "") {
            toast.error("Please enter a search query!");
            return;
        }
        onSubmit(query);
        setQuery("");
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" >Search</button>
            </form>
        </header>

    );
};

export default SearchBtn;