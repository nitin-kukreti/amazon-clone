import React from 'react'
import { CheckoutProduct } from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import './Order.css'
function Order({ order }) {

    return (
        <div className="order">
            <h2>Order</h2>
            <p className="order__id">
                <small>
                    {order.id}
                </small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                    hideButton={true}
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total"> Order Total : {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

        </div>
    )
}

export default Order