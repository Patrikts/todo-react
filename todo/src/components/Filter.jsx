const Filter = () => {
  return (
    <div>
        <h2>Filter:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Imcompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button>Asc</button>
                <button>Desc</button>
            </div>
        </div>
    </div>
  );
};

export default Filter