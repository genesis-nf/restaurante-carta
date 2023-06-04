import React, {useState} from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import saludable from "./saludable.png";


const allCategories = ["all", ... new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    setActiveCategory(category);
    if(category === "all"){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return (
  <main className="saludable section">
    <section className="tittle">
      <img src={saludable} alt="logoo" className="logo"/>
      <h2>Menu List</h2>
      <div className="underline">
      </div>
      <Categories 
      categories={categories} 
      activeCategory={activeCategory} 
      filterItems={filterItems}/>

    <Menu items={menuItems} />
    </section>
  </main>
  );
}

export default App;
