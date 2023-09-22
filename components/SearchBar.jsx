'use client'

import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch && typeof onSearch === 'function') {
            onSearch(query);
        }
    };

    return (
        <>
            <form onSubmit={handleSearch}>
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Rechercher..."
                />
                <button type="submit">Rechercher</button>
            </form>
        </>
    );
}