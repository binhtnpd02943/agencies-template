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
		title: 'Trang chủ',
		Icon: BarChartOutlinedIcon,
		menuChildren: [
			{
				title: 'Dashboard01',
				href: '/dashboards/dashboard1',
			},
			{
				title: 'Dashboard02',
				href: '/dashboards/dashboard2',
			},
			{
				title: 'Dashboard03',
				href: '/dashboards/dashboard3',
			},
			{
				title: 'Dashboard04',
				href: '/dashboards/dashboard4',
			},
			{
				title: 'Dashboard05',
				href: '/dashboards/dashboard5',
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Quản lý đại lý',
		Icon: WebOutlinedIcon,
		menuChildren: [
			{
				title: 'Quản lý đại lý',
				href: 'agencies/list',
			},
			{
				title: 'Notifications',
				href: '/pages/notifications',
			},
			{
				id: uuid(),
				title: 'Pricing Pages',
				type: 'group',
				menuChildren: [
					{
						title: 'Pricing 1',
						href: '/pages/pricing/pricing1',
					},
					{
						title: 'Pricing 2',
						href: '/pages/pricing/pricing2',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Quản lý đại lý',
		Icon: AutoStoriesOutlinedIcon,
		menuChildren: [
			{
				title: 'Account Settings',
				href: '/pages/settings',
			},
			{
				title: 'Notifications',
				href: '/pages/notifications',
			},
			{
				id: uuid(),
				title: 'Pricing Pages',
				type: 'group',
				menuChildren: [
					{
						title: 'Pricing 1',
						href: '/pages/pricing/pricing1',
					},
					{
						title: 'Pricing 2',
						href: '/pages/pricing/pricing2',
					},
				],
			},
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Theme',
		Icon: PaletteOutlinedIcon,
		menuChildren: [
			{
				title: 'Paleta de Colores',
				href: '/theme/colors',
			},
			{
				title: 'Tipografia',
				href: '/theme/typography',
			},
			{
				title: 'Sombras',
				href: '/theme/boxShadow',
			},

			/* {
				title: 'Iconos',
				href: '/theme/icons',
			}, */
			{
				title: 'Utilities WIP',
				// Breakpoints
				href: '/theme/utils',
			},
			// libraries/ packgaes ej.> moment
		],
	},
	{
		id: uuid(),
		type: 'group',
		title: 'Apps',
		Icon: InventoryOutlinedIcon,
		menuChildren: [
			{
				title: 'Ecommerce WIP',
				href: '/profile WIP',
			},
			{
				title: 'Social Feed WIP',
				href: '/profile WIP',
			},
			{
				title: 'Calendar WIP',
				href: '/profile WIP',
			},
			{
				title: 'Chat WIP',
				href: '/profile WIP',
			},
		],
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Sample Tab',
		Icon: WebOutlinedIcon,
		href: '/samplePage',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Widgets',
		Icon: WidgetsOutlinedIcon,
		href: '/widgets',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Perfil',
		Icon: AccountCircleOutlinedIcon,
		href: '/profile',
	},
];

export default NAV_LINKS_CONFIG;
