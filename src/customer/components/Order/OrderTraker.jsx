import { Label } from "@mui/icons-material"
import { Step, StepLabel, Stepper } from "@mui/material"
import React from "react"

const steps=[
    "Place",
    "Order Confirm",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
const OrderTraker =({activeStep}) =>{
    return (
        <div className="w-full"> 
            <Stepper activeStep={activeStep}alternativeLabel>
                {steps.map((label)=> <Step> 
                    <StepLabel sx={{color:"#9055FD",fontSize:"44px"}}>{label}</StepLabel>
                </Step>)}    
            </Stepper>
        </div>
    )
}
export default OrderTraker