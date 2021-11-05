const menu = [  

{   id:1,
    title:"pancakes",
    category:"breakfast", 
    price:10,
    img:"img/item-1.jpeg",
    desc: `Description  about burger` },  


    {   id:2,
        title:"burger with fries",
        category:"lunch", 
        price:10,
        img:"img/item-2.jpeg",
        desc: `Description  about burger` },


        {   id:3,
            title:"shake",
            category:"shakes", 
            price:10,
            img:"img/item-3.jpeg",
            desc: `Description  about burger` },

            {   id:4,
                title:"eggs with meat",
                category:"breakfast", 
                price: 20,
                img:"img/item-4.jpeg",
                desc:  `Description  about burger` },
    

                {   id:5,
                    title:"burger",
                    category:"lunch", 
                    price:7,
                    img:"img/item-5.jpeg",
                    desc: `Description  about burger` },
    
                    
                    {   id:6,
                        title:"chocoshake",
                        category:"shakes", 
                        price:12,
                        img:"img/item-6.jpeg",
                        desc: `Description  about burger` },
    
                        
                        {   id:7,
                            title:"bacon burger",
                            category:"breakfast", 
                            price:10,
                            img:"img/item-7.jpeg",
                            desc: `Description  about burger` },
    
                            
                            {   id:8,
                                title:"burger with fries",
                                category:"lunch", 
                                price:8,
                                img:"img/item-8.jpeg",
                                desc: `Description  about burger` },
    
                                
                                {   id:9,
                                    title:"shake",
                                    category:"shakes", 
                                    price:5,
                                    img:"img/item-9.jpeg",
                                    desc: `Description  about shake` },
    
                                    
                                    {   id:10,
                                        title:"Steak",
                                        category:"dinner", 
                                        price:20,
                                        img:"img/item-10.jpeg",
                                        desc:  `Description  about Steak` },

                                        {   id:11,
                                            title:"Steak",
                                            category:"dinner", 
                                            price:20,
                                            img:"img/item-10.jpeg",
                                            desc: `Description  about Steak` }
                            

];

const sectionCenter = document.querySelector(".section-center");

const btnConatiner = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class = 'menu-item'> 
        <img src = ${item.img} alt = ${item.title} class = 'photo'>
        <div class = 'item-info'> 
         <header> 
         <h4> ${item.title} </h4>
         <h4 class = 'price'> pln ${item.price}   </h4>
         </header>
         <p class = "item-text"> ${item.desc} </p>
         </div>
         </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


function  displayMenuButtons() {
    const categories = menu.reduce (
        function(values, item) {
          if(!values.includes(item.category)) {
          values.push(item.category);  
        }
        return values;    
    },
["all"]
    );

    const categoryBtns = categories.map (function(category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
         ${category}
        </button>`;
    })

       .join('');

       btnConatiner.innerHTML = categoryBtns; 
const filterBtns = btnConatiner.querySelectorAll(".filter-btn");
console.log(filterBtns);

filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem)
        {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category==="all") {
            displayMenuItems(menu); 
        }
        else {
            displayMenuItems(menuCategory);
        }
});


}); 

}



        