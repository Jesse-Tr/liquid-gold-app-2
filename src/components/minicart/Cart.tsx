import CartItem from "./CartItem"

import { useCartStore } from "../../stores/useCartStore"

import useFromStore from "../../hooks/useFromStore"

import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
//import styles from '@Home.module.css'

export function Cart() {
	const cart = useFromStore(useCartStore, state => state.cart)

	let total = 0
	if (cart) {
		total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0)
	}

	return (
		<section>
			<h3 className='text-2xl font-bold mb-4'

				style={
					{
						backgroundColor: "#621709",
						borderColor: "#FF1493",
						color: "#face44",
						textAlign: "center"

					}
				}
			>Shopping Cart</h3>
			<ul>
				{cart?.map(product => (
					<CartItem key={product.id} product={product} />
				))}
			</ul>
			<div className='flex justify-between items-center mt-4'>
				<span className='text-lg font-bold'>Total:</span>
				<span className='text-xl font-bold'>{total.toFixed(2)}</span>


			</div>
			<PaymentForm
				applicationId="sandbox-sq0idb-dwZqi20islSpnUo2X9CTmw"
				cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
					const response = await fetch("/api/pay", {
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify({
							sourceId: token.token,
						}),
					});
					console.log(await response.json());
				}}
				locationId='LQ2D5HHJ8A5RA'
			>
				<CreditCard
					buttonProps={{
						css: {
							backgroundColor: "#771520",
							fontSize: "14px",
							color: "#fff",
							"&:hover": {
								backgroundColor: "#530f16",
							},
						},
					}}
				/>
			</PaymentForm>

		</section>
	)
}

export default Cart
