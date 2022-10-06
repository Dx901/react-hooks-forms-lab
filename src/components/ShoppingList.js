
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") { 
      return true
    } else {
      return item.category === selectedCategory
    }})
    .filter(item => item.name.match(search));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
        search={search} 
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


































// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items, handleChangeItems }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchText, setSearchText] = useState('')
//   const [newName, setNewName] = useState('')
//   const [newCategory, setNewCategory] = useState('Produce')

//   function handleNewCategory(event) {
//     setNewCategory(event.target.value);
//   }
//   function handleSearchTextChange(e){
//     setSearchText(e.target.value)
//     console.log(newCategory)
//   }
//   function handleNameChange(e) {
//     setNewName(e.target.value)
//   }
//   function handleCategoryChange(e) {
//     setSelectedCategory(e.target.value)
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });
//   const filteredItemsToDisplay = itemsToDisplay.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase())
//   })

//   return (
//     <div className="ShoppingList">
//       <ItemForm newName={newName} newCategory={newCategory} onNameChange= {handleNameChange} onNewCategory={handleNewCategory} handleChangeItems={handleChangeItems}/>
//       <Filter onCategoryChange={handleCategoryChange} onSearchTextChange={handleSearchTextChange} searchText={searchText}/>
//       <ul className="Items">
//         {filteredItemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//         {console.log(filteredItemsToDisplay)}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
