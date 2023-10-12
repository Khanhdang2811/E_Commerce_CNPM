import React, { useState , useRef  } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; // Import component HomeSectionCard
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  Button  from '@mui/material/Button'
import "@mui/styles"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarosel = ({data,sectinoname}) => {
    const [activeIndex, setActiveIndex] = useState(0); // State để theo dõi chỉ số hoạt động của carousel
    const carouselRef = useRef(null);

    // Định nghĩa cài đặt phản hồi (responsive) cho carousel
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    // Hàm để chuyển đến mục trước đó trong carousel
    const slidePrev = () => {
        carouselRef.current.slidePrev();
    };

   
    
    // Hàm để chuyển đến mục tiếp theo trong carousel
 const slideNext = () => {
        carouselRef.current.slideNext();
    };
    // Hàm này để đồng bộ hóa chỉ số hoạt động của carousel với chỉ số của mục hiện tại
    const syncActiveIndex=({item}) => setActiveIndex(item);

    // Tạo danh sách các phần tử cho carousel từ danh sách sản phẩm 'mens_kurta'
    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);

    return (
        <div className="border">
            <h2 className="text-2x1 font-extrabold text-gray-800 py-5">{sectinoname}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls // Tắt nút trượt mặc định của carousel
                    responsive={responsive} // Sử dụng cài đặt phản hồi
                    disableDotsControls // Tắt nút chỉ số trang
                    onSlideChanged={syncActiveIndex} // Gọi hàm syncActiveIndex mỗi khi mục hoạt động thay đổi
                    activeIndex={activeIndex} // Chỉ định chỉ số mục hoạt động
                    ref={carouselRef} // Sử dụng ref ở đây
                />
                {activeIndex !== items.length - 5 && (
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext} // Gọi hàm slideNext khi nút "next" được nhấn
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0',
                            transform: 'translateX(-50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        variant="contained"
                        onClick={slidePrev} // Gọi hàm slidePrev khi nút "previous" được nhấn
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
