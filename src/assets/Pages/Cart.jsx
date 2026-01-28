import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {
    let {state, dispatch}=useContext(CartContext)
  return (
    <div className='p-8'>
        <table className='w-full text-sm text-left rtl:text-right text-body'>
            <tr className='text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default'>
                <td>S.no</td>
                <td>Title</td>
                <td>Image</td>
                <td>Action</td>
            </tr>
            {state.cart.map((a)=>(
                <tr key={a.id}>
                    <td>{a.id}</td>
                    <td>{a.title}</td>
                    <td><img width={'120px'} src={a.thumbnail}/></td>
                    <td><button className='cursor-pointer' onClick={() => dispatch({ type: 'remove', payload: a.id })}>*</button></td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Cart