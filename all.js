new Vue({
    el:'#app',
    data:{
        products:[
            {
                id:123456789,
                title:'菲力牛排',
                category:'牛排',
                content:'軟嫩細緻',
                description:'美國Prime菲力',
                enabled:1,
                origin_price:2800,
                price:2400,
                unit:'客',
                imageUrl:['https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80'],
            },
        ],
        tempProduct:{},
    },
    methods:{
        updateProduct(){
            if(this.tempProduct.id){
                const id = this.tempProduct.id;
                this.products.forEach((item ,i) => {
                    if(item.id === id){
                        this.products[i] = this.tempProduct;
                    }
                });
            }
            else{
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        delProduct(){
            if(this.tempProduct.id){
                const id = this.tempProduct.id;
                this.products.forEach((item, i) =>{
                    if(item.id === id){
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');
        },
        // 把HTML的openmodal(n,item)，n設為要做的事情，switch選擇當n=x的時候執行dom或其他動作
        openModal(isNew, item){
            switch(isNew){
                case 'new':
                    this.tempProduct = {};
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({},item);
                    console.log(this.tempProduct);
                    $('productModal').modal('show');
                    break;
                case 'delete':
                    $('delProductModal').modal('show');
                    this.tempProduct = Object.assign({},item);
                    break;
                default:
                    break;
            }
        }
    },
});