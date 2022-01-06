const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get" className="search-form">
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search products"
            name="s" 
        />
    </form>
);

export default SearchBar;