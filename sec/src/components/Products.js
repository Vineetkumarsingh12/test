import React from "react";
import ProductItem from "./ProductItem";
import Card from "./Card";
function Products(props){
    return(
        <Card className="product">
            <ProductItem
           year={props.ProductsDetails[0].year} date={props.ProductsDetails[0].date} month={props.ProductsDetails[0].month}>

           </ProductItem>
           <ProductItem
           year={props.ProductsDetails[0].year} date={props.ProductsDetails[0].date} month={props.ProductsDetails[0].month}>

           </ProductItem>
           <ProductItem
           year={props.ProductsDetails[0].year} date={props.ProductsDetails[0].date} month={props.ProductsDetails[0].month}>

           </ProductItem>
       
        </Card>
    )
}
export default Products;