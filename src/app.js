import { Product } from "./modules/claseProducto";
import { UI } from "./modules/claseUI";


//DOM Events 
document.getElementById('product-form')
    .addEventListener('submit',
        (event) => {
            const name= document.getElementById('name').value;
            const price= document.getElementById('price').value;
            const year= document.getElementById('year').value;

            const product = new Product(name,price,year);

            const ui= new UI();

            ui.addProduct(product);

            event.preventDefault();
        });

document.getElementById('product-list').addEventListener('click', 
(event)=>{
    const ui = new UI();
    ui.deleteProduct(event.target);
    
}
)