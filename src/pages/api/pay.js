import { Client } from 'square';
import { randomUUID } from 'crypto';


//import { cart} from "../../components/minicart/Cart";
import { useCartStore } from "../../stores/useCartStore"
import useFromStore from "../../hooks/useFromStore"
//import  Cart from "../../components/minicart/Cart";
/*
function total( ){

   const cart = useFromStore(useCartStore, state => state.cart)

  let total = 0
  
    total = cart.reduce((acc, product) => acc + product.price * (product.quantity ), 0)
  console.log(total)
  
  
}
*/
BigInt.prototype.toJSON = function() { return this.toString(); }

const { paymentsApi } = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
  });




export default async function handler(req, res) {

    
  if ( req.method === 'POST' ) {
    
    const { result } = await paymentsApi.createPayment({
    
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
       
        amount:100
      }
    })
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }


}


