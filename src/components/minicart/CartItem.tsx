import { FaTrashAlt } from "react-icons/fa"
import { Product } from "../../types"
import Image from "next/image"
import { useCartStore } from "../../stores/useCartStore"
import useFromStore from "@/hooks/useFromStore"


interface Props {
	product: Product
}

export default function CartItem({ product }: Props) {
	const removeFromCart = useCartStore(state => state.removeFromCart)
	const addToCart = useCartStore(state => state.addToCart)
	var NumericInput = require('react-numeric-input');
	//
	const cart = useFromStore(useCartStore, state => state.cart)
//total price for all products on cart
	let total = 0
	if (cart) {
		total = cart.reduce((acc, product) => acc + product.price * (product.quantity as number), 0)
	}
// total quantity of all products on cart
	let totalMon = 0
	if (cart) {
		totalMon = cart.reduce((acc, product) => acc + (product.quantity as number), 0)
	}

	//




	//console.log(product.quantity)
	console.log(total)
	console.log(totalMon)


	return (

		<li className='flex justify-between items-center gap-4  mb-2 shadow-md p-4'>
			<div className='flex items-center'>
				<Image
					src={product.thumbnail}
					alt={product.title}
					width={100}
					height={100}
					className='h-10 w-10 rounded-full mr-4'
				/>

				<div className='flex flex-col'>
					<span className='font-bold flex-1'>{product.title}</span>
					<span className='text-gray-600 font-bold'>${product.price}</span>
					<span className=' font-semibold'>Quantity {product.quantity}</span>


					<NumericInput 
					className='form-control flex flex-col  w-auto sm:h-10 ' 
					//readOnly 
				
					 size={14} step={1.0} precision={0} min={0} max={50} onchange={product.quantity} value={product.quantity} strict 
					 />
				</div>
				<div>

				</div>
			</div>
			<div>
				<button
					title='Remove Item'
					className='text-red-500 hover:text-red-600  pr-4'
					onClick={() => removeFromCart(product)}
				>
					<FaTrashAlt size={18} />
				</button>
			</div>
		</li>

	)

}
