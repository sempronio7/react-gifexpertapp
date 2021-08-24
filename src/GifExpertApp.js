import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['one punch','samurai','goku'];
    
    //const [categories, setCategories] = useState(['one punch','samurai','goku']);
    const [categories, setCategories] = useState(['goku']);

    const handleAdd = () => {
        //setCategories ([...categories, 'caminito']); //una forma
        setCategories (cats => [...categories, 'caminito']); //otra forma
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                { 
                    categories.map(category => 
                        //return <li key={category}>{category}</li>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }

            </ol>
        </>
    )
}