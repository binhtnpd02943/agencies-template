import { v4 as uuid } from 'uuid';
// Icons
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

/**
 * @example
 * {
 *	id: number,
 *	type: "group" | "item",
 *	title: string,
 *	Icon: NodeElement
 *	menuChildren?: {title: string, href: string}[]
 *  menuMinWidth?: number
 * }
 */

const NAV_LINKS_CONFIG = [
	{
		id: uuid(),
		type: 'group',
		title: 'Tổng quan hệ thống',
		Icon: BarChartOutlinedIcon,
		menuChildren: [
			{
				title: 'Thống kê doanh thu',
				href: '/dashboards/dashboard1',
			},
			{
				title: 'Hiệu suất đại lý',
				href: '/dashboards/dashboard2',
			},
			{
				title: 'Tỷ lệ khiếu nại',
				href: '/dashboards/dashboard3',
			},
			{
				title: 'Phân tích khu vực',
				href: '/dashboards/dashboard4',
			},
			{
				title: 'Tăng trưởng theo thời gian',
				href: '/dashboards/dashboard5',
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Quản lý tổ chức đại lý',
		Icon: WebOutlinedIcon,
		menuChildren: [
			{
				title: 'Danh sách đại lý',
				href: 'agencies/list',
			},
			{
				title: 'Thông báo hệ thống',
				href: '/pages/notifications',
			},
			{
				id: 'b8357460-3d09-42ce-9bb8-ed1662c75bfd',
				title: 'Chính sách & gói sản phẩm',
				type: 'group',
				menuChildren: [
					{
						title: 'Gói cơ bản',
						href: '/pages/pricing/pricing1',
					},
					{
						title: 'Gói nâng cao',
						href: '/pages/pricing/pricing2',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Nhân sự & phân quyền',
		Icon: AutoStoriesOutlinedIcon,
		menuChildren: [
			{
				title: 'Cài đặt tài khoản',
				href: '/pages/settings',
			},
			{
				title: 'Thông báo cá nhân',
				href: '/pages/notifications',
			},
			{
				id: '60b87da9-3789-4c45-9b90-3931de0ab092',
				title: 'Phân quyền người dùng',
				type: 'group',
				menuChildren: [
					{
						title: 'Quản lý trưởng nhóm',
						href: '/pages/pricing/pricing1',
					},
					{
						title: 'Quản lý nhân viên',
						href: '/pages/pricing/pricing2',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Cấu hình hệ thống',
		Icon: PaletteOutlinedIcon,
		menuChildren: [
			{
				title: 'Màu giao diện',
				href: '/theme/colors',
			},
			{
				title: 'Kiểu chữ',
				href: '/theme/typography',
			},
			{
				title: 'Hiệu ứng giao diện',
				href: '/theme/boxShadow',
			},
			{
				title: 'Công cụ hiển thị',
				href: '/theme/utils',
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Tiện ích hỗ trợ',
		Icon: InventoryOutlinedIcon,
		menuChildren: [
			{
				title: 'Quản lý hợp đồng',
				href: '/contracts',
			},
			{
				title: 'Theo dõi chăm sóc khách hàng',
				href: '/customer-care',
			},
			{
				title: 'Lịch trình công việc',
				href: '/calendar',
			},
			{
				title: 'Tin nhắn nội bộ',
				href: '/chat',
			},
		],
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Báo cáo mẫu',
		Icon: WebOutlinedIcon,
		href: '/samplePage',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Widget thống kê',
		Icon: WidgetsOutlinedIcon,
		href: '/widgets',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Hồ sơ cá nhân',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
];

export default NAV_LINKS_CONFIG;
