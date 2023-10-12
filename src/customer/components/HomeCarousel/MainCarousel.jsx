import React from 'react';
// Đổi tên import từ homeCarouselData thành mainCarouselData để sử dụng trong mã
import { homeCarouselData as mainCarouselData } from './MainCarouselData'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  // Dùng map để tạo các phần tử ảnh cho carousel từ dữ liệu trong mainCarouselData
  const items = mainCarouselData.map((item) => (
    // Tạo phần tử hình ảnh cho carousel
    <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt="" />
  ));

  return (
    // Sử dụng thư viện AliceCarousel để tạo carousel
    <AliceCarousel
      items={items} // Danh sách các phần tử ảnh bạn đã tạo
      disableButtonsControls // Tắt điều khiển nút trượt của carousel
      autoPlay // Tự động phát carousel
      autoPlayInterval={1000} // Thời gian giữa các lượt trượt (1 giây)
      infinite // Cho phép lặp vô hạn qua các ảnh trong carousel
    />
  );
};

export default MainCarousel;
