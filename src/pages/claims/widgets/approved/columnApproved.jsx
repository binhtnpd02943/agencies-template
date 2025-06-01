import formatDateTime from '@/utils/helpers/common';
import { Tag, Tooltip } from 'antd';

/**
 * Cột hiển thị danh sách HỢP ĐỒNG CHI BỒI THƯỜNG
 * Mục tiêu: Theo dõi tiến độ, số tiền đã chi, thông tin xử lý, nhân sự liên quan và tài liệu đi kèm.
 */

const CLAIM_APPROVED_COLUMN_DEFS = () => [
	{
		title: 'Mã yêu cầu',
		dataIndex: 'claimCode',
		key: 'claimCode',
		render: (text) => <span className="font-semibold text-blue-700">{text}</span>,
	},
	{
		title: 'Mã hợp đồng',
		dataIndex: 'contractCode',
		key: 'contractCode',
		render: (text) => <span className="italic text-gray-700">{text}</span>,
	},
	{
		title: 'Tên khách hàng',
		dataIndex: 'clientName',
		key: 'clientName',
		render: (text) => <span>{text}</span>,
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
		title: 'Nhân sự xử lý',
		dataIndex: 'processedBy',
		key: 'processedBy',
		render: (text) => <span className="text-gray-600">{text}</span>,
	},
	{
		title: 'Số tiền bồi thường',
		dataIndex: 'claimAmount',
		key: 'claimAmount',
		render: (amount) => <span className="font-semibold text-green-600">{amount.toLocaleString()}₫</span>,
	},
	{
		title: 'Phương thức chi trả',
		dataIndex: 'paymentMethod',
		key: 'paymentMethod',
		filters: [
			{ text: 'Chuyển khoản', value: 'bank' },
			{ text: 'Tiền mặt', value: 'cash' },
			{ text: 'Bảo lãnh viện phí', value: 'guarantee' },
		],
		render: (method) => {
			const map = {
				bank: 'Chuyển khoản',
				cash: 'Tiền mặt',
				guarantee: 'Bảo lãnh viện phí',
			};
			return <span>{map[method]}</span>;
		},
	},
	{
		title: 'Trạng thái chi trả',
		dataIndex: 'status',
		key: 'status',
		filters: [
			{ text: 'Đã chi', value: 'paid' },
			{ text: 'Đang xử lý', value: 'processing' },
		],
		render: (status) => {
			const map = {
				paid: { color: 'green', label: 'Đã chi' },
				processing: { color: 'orange', label: 'Đang xử lý' },
			};
			return <Tag color={map[status]?.color}>{map[status]?.label}</Tag>;
		},
	},
	{
		title: 'Ngày gửi yêu cầu',
		dataIndex: 'requestedAt',
		key: 'requestedAt',
		render: (text) => <span className="text-xs italic text-gray-500">{formatDateTime(text)}</span>,
	},
	{
		title: 'Ngày chi trả',
		dataIndex: 'processedAt',
		key: 'processedAt',
		sorter: true,
		render: (text) => <span className="text-xs italic text-gray-500">{formatDateTime(text)}</span>,
	},
	{
		title: 'Ghi chú',
		dataIndex: 'note',
		key: 'note',
		render: (text) => (
			<Tooltip title={text}>
				<span className="truncate block max-w-[160px] text-gray-500">{text}</span>
			</Tooltip>
		),
	},
	{
		title: 'Tài liệu đính kèm',
		dataIndex: 'attachments',
		key: 'attachments',
		render: (attachments = []) =>
			attachments.length ? (
				<a href={attachments[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
					Xem file
				</a>
			) : (
				<span className="text-gray-400 italic">Không có</span>
			),
	},
];

export default CLAIM_APPROVED_COLUMN_DEFS;
