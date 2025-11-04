const GroceryList = ({groceryList}) => {
    return(
        <ul>
            {groceryList.map(grocery => <li>{grocery}</li>)}
        </ul>
    )
}

export default GroceryList