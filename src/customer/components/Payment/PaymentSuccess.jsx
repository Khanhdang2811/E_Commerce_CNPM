import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OrderTraker from '../Order/OrderTraker';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import { AlertTitle, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';



export const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const { orderId } = useParams();

    const dispatch = useDispatch();
    const { order } = useSelector(store => store);

    console.log("order ", order.order)

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);

        setPaymentId(urlParam.get("paypal_payment_id"));
        setPaymentStatus(urlParam.get("paypal_payment_status"));
    }, [])

    useEffect(() => {
        if (paymentId) {
            const data = { orderId, paymentId }
            dispatch(getOrderById(orderId))
            dispatch(updatePayment(data))
        }
    }, [orderId, paymentId])


    return (
        <div className='px-2 lg:px-36'>

            <div className='flex flex-col justify-center items-center'>
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulations! Your Order Get Placed
                </Alert>
            </div>

            <OrderTraker activeStep={1} />

            <Grid container className='space-y-5 py-5 pt-20'>

                {order.order?.orderItems.map((item) => <Gird container item className='shadow-x1 round-md p-5'
                    sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Gird item xs={6}>

                        <div className='flex items-center'>
                            <image className='w-[5rem] h-[5rem] object-cover object-top' src="{item.prodcut.imageUrl}" alt="" />

                            <div className='ml-5 space-y-2'>
                                <p>{item.product.title}</p>
                                <div className='opacity-50 text-xs font-semibold space-x-5'>
                                    <span>Color : {item.color}</span>
                                    <span>Size : {item.size}</span>
                                </div>
                                <p>Seller : {item.product.brand}</p>
                                <p>{item.price} $</p>
                            </div>


                        </div>

                    </Gird>
                    <Grid item>
                        <AddressCard address={order.order?.shippingAddress} />
                    </Grid>


                </Gird>)}

            </Grid>


        </div>
    )
}

export default PaymentSuccess