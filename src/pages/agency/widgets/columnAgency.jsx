import formatDateTime from '@/utils/helpers/common';
import { Tag } from 'antd';

const AGENT_MANAGEMENT_COLUMN_DEFS = ({ filterSearchParams, sortParams }) => [
	{
		title: 'Mã đại lý',
		dataIndex: 'code',
		key: 'code',
		render: (text) => <span className="font-medium text-gray-700 italic">{text}</span>,
	},
	{
		title: 'Tên đại lý',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <span className="font-medium text-gray-700 italic">{text}</span>,
	},
	{
		title: 'Người phụ trách',
		dataIndex: 'managerName',
		key: 'managerName',
		render: (text) => <span className="text-gray-600">{text}</span>,
	},
	{
		title: 'SĐT',
		dataIndex: 'phone',
		key: 'phone',
		render: (text) => <span className="text-gray-600">{text}</span>,
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
		render: (text) => <span className="text-gray-500">{text}</span>,
		responsive: ['md'],
	},
	{
		title: 'Khu vực',
		dataIndex: 'location',
		key: 'location',
		render: (text) => <span className="text-gray-600">{text}</span>,
		responsive: ['md'],
	},
	{
		title: 'Số ban nhỏ',
		dataIndex: 'teamCount',
		key: 'teamCount',
		sorter: true,
		render: (text) => <span className="font-medium">{text}</span>,
		responsive: ['lg'],
	},
	{
		title: 'Số nhân sự',
		dataIndex: 'agentCount',
		key: 'agentCount',
		sorter: true,
		render: (text) => <span className="font-medium">{text}</span>,
		responsive: ['lg'],
	},
	{
		title: 'Tổng KH phục vụ',
		dataIndex: 'totalClients',
		key: 'totalClients',
		sorter: true,
		render: (text) => <span className="italic">{text}</span>,
		responsive: ['lg'],
	},
	{
		title: 'Trạng thái',
		dataIndex: 'status',
		key: 'status',
		filters: [
			{ text: 'Đang hoạt động', value: 'active' },
			{ text: 'Tạm dừng', value: 'inactive' },
			{ text: 'Đang chờ', value: 'pending' },
		],
		render: (status) => {
			let color;
			let label;

			switch (status) {
				case 'active':
					color = 'green';
					label = 'Hoạt động';
					break;
				case 'inactive':
					color = 'orange';
					label = 'Tạm dừng';
					break;
				default:
					color = 'gray';
					label = 'Đang chờ';
			}
			return <Tag color={color}>{label}</Tag>;
		},
	},
	{
		title: 'Ngày tạo',
		dataIndex: 'createdAt',
		key: 'createdAt',
		sorter: true,
		render: (text) => <span className="text-xs italic text-gray-500">{formatDateTime(text)}</span>,
	},
];

export default AGENT_MANAGEMENT_COLUMN_DEFS;
