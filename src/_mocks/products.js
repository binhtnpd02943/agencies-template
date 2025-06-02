import product1 from '@/assets/images/products/001.png';
import product2 from '@/assets/images/products/002.png';
import product3 from '@/assets/images/products/003.png';
import product4 from '@/assets/images/products/004.png';
import product5 from '@/assets/images/products/005.png';

function createData(id, productImg, name) {
	return {
		id,
		productImg,
		name,
	};
}

export default [
	createData(1, product1, 'Bảo hiểm Xe cơ giới'),
	createData(2, product2, 'Bảo hiểm Sức khỏe'),
	createData(3, product3, 'Bảo hiểm Tài sản & Hỗn hợp'),
	createData(4, product4, 'Bảo hiểm Kỹ thuật'),
	createData(5, product5, 'Bảo hiểm Hàng không'),
];
