class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>:${product.name}
                    <strong>Product Price</strong>:${product.price}
                    <strong>Product Year</strong>:${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if (element.name === 'delete')
        {
            element.parentElement.parentElement.parentElement.remove();
        }
    }
    showMessage() {

    }
}

export {UI};
