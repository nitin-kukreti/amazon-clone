import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import { useStateValue } from './StateProvider'
import './Orders.css'
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue()
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            async function fetchMyAPI() {

                const docRef = collection(db, 'users', user.uid, 'orders')
                const docSnap = await getDocs(docRef);
                setOrders(docSnap.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            }
            fetchMyAPI()

        }

    }
        , [user])
    

    return (
        <div className="orders">
            <h1>your orders </h1>
            <div className="orders__order">
                {
                    orders?.map(
                        item => (
                            <Order order={item} />
                        ))}
            </div>
        </div>
    )
}

export default Orders