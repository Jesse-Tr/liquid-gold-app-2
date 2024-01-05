import Image from "next/image"

import { useCartStore } from "../../stores/useCartStore"

import { Product } from "@/types.d"

interface Props {
	product: Product
}

export default function ProductCard({ product }: Props) {
	const addToCart = useCartStore(state => state.addToCart)

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 '
		style={
			{
				backgroundColor: "#4e1207",
				borderColor: "#FF1493",
				color:"#face44"

			}
		}>
			<Image
				src={product.images[0]}
				alt={product.title}
				width={300}
				height={200}
				className='object-contain w-full h-56'
			/>
			<div className='flex-1 flex flex-col justify-between'
			>
				<h2 className='text-lg font-semibold flex justify-center'>{product.title}</h2>
				<h3 className="text-md font-semibold flex justify-center">Ingredients: {product.ingridents}</h3>
				<h5 className='text-md flex-1 text-pink-400'>{product.description}</h5>
				<div className='mt-4 flex items-center justify-between'>
					<span className='font-semibold'>${product.price.toFixed(2)}</span>
					<div
					>
						<button


							type='button'
							className='ml-2 bg- bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600'
							style={
								{
									backgroundColor: "#bc3a53",
									borderColor: "#FF1493",
									color:"#face44"

								}
							}

							onClick={() => addToCart(product)}
						>
							Add to Cart
						</button></div>
				</div>
			</div>
		</div>
		
	)
}
