import formatDateTime from '@/utils/helpers/common';
import { Tag } from 'antd';

/**
 * Cột hiển thị danh sách HỢP ĐỒNG TỪ CHỐI BỒI THƯỜNG
 * Mục tiêu: Giúp đại lý và quản lý theo dõi tình trạng xử lý bồi thường bị từ chối,
 * lý do từ chối, người đánh giá và thời gian cập nhật.
 */

const CLAIM_REJECTED_COLUMN_DEFS = () => [
	{
		title: 'Mã hợp đồng',
		dataIndex: 'contractCode',
		key: 'contractCode',
		render: (text) => <span className="font-medium text-red-700">{text}</span>,
	},
	{
		title: 'Tên khách hàng',
		dataIndex: 'clientName',
		key: 'clientName',
	},
	{
		title: 'Sản phẩm bảo hiểm',
		dataIndex: 'product',
		key: 'product',
	},
	{
		title: 'Đại lý phụ trách',
		dataIndex: 'agencyName',
		key: 'agencyName',
	},
	{
		title: 'Số tiền yêu cầu',
		dataIndex: 'claimAmount',
		key: 'claimAmount',
		render: (amount) => <span className="font-semibold text-gray-700">{amount.toLocaleString()}₫</span>,
	},
	{
		title: 'Lý do từ chối',
		dataIndex: 'rejectionReason',
		key: 'rejectionReason',
		render: (text) => <span className="italic text-gray-600">{text}</span>,
	},
	{
		title: 'Người đánh giá',
		dataIndex: 'reviewedBy',
		key: 'reviewedBy',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'Trạng thái xử lý',
		dataIndex: 'status',
		key: 'status',
		filters: [
			{ text: 'Đã từ chối', value: 'rejected' },
			{ text: 'Đang xem xét', value: 'reviewing' },
		],
		render: (status) => {
			const map = {
				rejected: { color: 'red', label: 'Đã từ chối' },
				reviewing: { color: 'orange', label: 'Đang xem xét' },
			};
			return <Tag color={map[status]?.color}>{map[status]?.label}</Tag>;
		},
	},
	{
		title: 'Ngày cập nhật',
		dataIndex: 'updatedAt',
		key: 'updatedAt',
		sorter: true,
		render: (text) => <span className="text-xs italic text-gray-500">{formatDateTime(text)}</span>,
	},
];

export default CLAIM_REJECTED_COLUMN_DEFS;
