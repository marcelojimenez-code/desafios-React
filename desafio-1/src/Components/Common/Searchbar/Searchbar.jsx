import { React, useState } from "react";

const Searchbar = ({enSubmit}) => {
    const [term , setTerm ] = useState("");

    function handleFormSubmit(e){
        e.preventDefault();
        enSubmit(term);
    }

    function handleChange(e){
        setTerm(e.target.value);
    }

  return (
    <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
    </div>
  )
}

export default Searchbar
