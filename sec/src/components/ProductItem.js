import React from "react";
import Card from "./Card";
import ProductDatMon from "./ProductDatMon";
function ProductItem(props){

    return(
        <Card>
            <ProductDatMon date={props.date} month={props.month}></ProductDatMon>
            <div>
                <h2>
                    {props.year}
                </h2>
            </div>
        </Card>
    )
}
export default ProductItem;