// Price of Mangoes

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
  
    let disc = ((quantity - (quantity % 3)) * 2) / 3
    
    return (disc + (quantity % 3)) * price
    
  }