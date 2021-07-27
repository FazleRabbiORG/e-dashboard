import React from "react";
import "./SellingProduct.css"
const SellingProduct = () => {
  return (
    <div className="sellingProduct bg-white   p-3">
      <div className="sellingProductHeader">
        <span>Top selling Products</span>
      </div>
      <div className="sellingProductTable">
        <table class="table">
          <tbody>
            <tr>
              <td >Product Name</td>
              <td >price</td>
              <td >Sold</td>
              <td >Revenue</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Samsung Galaxy S8 256GB</td>
              <td>$280</td>
              <td>126</td>
              <td>$38,536</td>
            </tr>
            <tr>
              <td>Samsung Galaxy S8 256GB</td>
              <td>$280</td>
              <td>126</td>
              <td>$38,536</td>
            </tr>
            <tr>
              <td>Samsung Galaxy S8 256GB</td>
              <td>$280</td>
              <td>126</td>
              <td>$38,536</td>
            </tr>
            <tr>
              <td>Samsung Galaxy S8 256GB</td>
              <td>$280</td>
              <td>126</td>
              <td>$38,536</td>
            </tr>
            <tr>
              <td>Samsung Galaxy S8 256GB</td>
              <td>$280</td>
              <td>126</td>
              <td>$38,536</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellingProduct;
