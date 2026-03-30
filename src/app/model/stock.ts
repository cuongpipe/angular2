export class Stock {
    favorite: boolean = false;

    constructor(
        public name: string // ":" là khai báo kiểu dữ liệu cho biến
        , public code: string
        , public price: number
        , public previousPrice: number
        , public exchange: string
    ){}
    isPositiveChange(): boolean{
        return this.price >= this.previousPrice;
            //nếu giá hiện tại price >= giá trước đó previus price
            //thì positiveChange = true
            //ngược lại positiveChange = false
    }
}
