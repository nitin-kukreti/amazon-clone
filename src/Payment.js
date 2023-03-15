import React from 'react'
import { useStateValue } from './StateProvider'
import { CheckoutProduct } from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import './Payment.css'
import { getBasketTotal } from './Reducer';
import { auth, db } from './firebase';
import { doc, addDoc, collection } from "firebase/firestore"
function Payment() {
    const history = useNavigate()

    const [{ basket, user }, dispatch] = useStateValue()
    const handleSubmit = async e => {
        e.preventDefault();

        const dbRef = collection(db, "users", user.uid, "orders");
        await addDoc(dbRef, {
            basket: basket,
            amount:getBasketTotal(basket),
        });
        dispatch({
            type: 'DONE'
        })

        history('/')

    }
    if (user == null) history('/')
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>
                        {basket?.length} items
                    </Link>)
                </h1>
                {/* Payement section delivery address  */}
                <div className="payment__section">
                    <div className="payment__title"> <h3>Delivery Address</h3></div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>

                {/* Payment section - Riview Items */}
                <div className="payment__section">
                    <div className="payment_title">
                        <h3>Review Item and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {
                            basket.map(
                                item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}


                    </div>
                </div>
                {/* Payment section- Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__detail">
                        <h3>Total Bill : <small>$</small> {getBasketTotal(basket)}  </h3>
                        <form onSubmit={handleSubmit}>
                            <button type='submit'>Pay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment