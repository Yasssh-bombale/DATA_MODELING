import mongoose from "mongoose";

const orderItemSchema = new mongoose.model({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
      /*
       or it can be done by below code ;

       type:[
        {
          product_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
          },
          quantity:{
            type:Number,
            required:true,
          }
        }
       ]
       */
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Delivered"],
      // !only the options below choosen will be considered to be store in databases ,,,in case of any spelling errors data must not be allowed to store in database or order model
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
