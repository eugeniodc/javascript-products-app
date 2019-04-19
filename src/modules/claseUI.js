class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.className = 'card text-center mb-4';
        element.innerHTML = `
                <div class="card-body">
                    <strong>Product Name</strong>:${product.name}
                    <strong>Product Price</strong>:${product.price}
                    <strong>Product Year</strong>:${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
        `;
        productList.appendChild(element);

        this.resetForm();

        this.showMessage('Product Added Sucessfully', 'success');
        event.preventDefault();
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if (element.name === 'delete') {
            console.log(element.parentElement.parentElement.remove());
            this.showMessage('Product Deleted Sucessfully', 'info');
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

export { UI };
