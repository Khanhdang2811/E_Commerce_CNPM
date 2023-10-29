
import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate("/product/${product.id}")} className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
          {/* Hiển thị hình ảnh sản phẩm */}
          <img
            className='h-full w-full object-cover object-left-top'
            src={product.imageUrl}
            alt={product.title} // Thuộc tính alt để mô tả hình ảnh cho trình duyệt
          />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          {/* Hiển thị thương hiệu sản phẩm với font đậm và độ mờ 60% */}
          <p className='font-bold opacity-60' >{product.brand}</p>
          {/* Hiển thị tiêu đề sản phẩm */}
          <p className=''>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          {/* Hiển thị giá sản phẩm có font in đậm */}
          <p className='font-semibold'>{product.discountedPrice}</p>
          {/* Hiển thị giá gốc của sản phẩm với đường gạch ngang và độ mờ 50% */}
          <p className='line-through opacity-50'>{product.price}</p>
          {/* Hiển thị phần trăm giảm giá với màu xanh lam và font in đậm */}
          <p className='text-green-600 font-semibold'>{product.discountPersent}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
