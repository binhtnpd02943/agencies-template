import { v4 as uuid } from 'uuid';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import CardHeader from '@/components/cardHeader';

import productsData from '@/_mocks/products';

function ProductsSection() {
	return (
		<Card type="none">
			<Stack direction="column">
				<CardHeader
					title="Mua hàng sản phẩm"
					size="small"
					sx={{
						m: 2,
					}}
				>
					<ButtonGroup variant="outlined" size="small" aria-label="temporaly button group">
						{['Hôm nay', 'Tháng này', 'Tuần này'].map((tab, i) => (
							<Button
								key={i}
								variant={tab === 'Tuần này' ? 'contained' : 'outlined'}
								sx={{
									...(tab === 'Tuần này' && {
										outline: (theme) => `2px solid ${theme.palette.primary.main}`,
									}),
								}}
							>
								{tab}
							</Button>
						))}
					</ButtonGroup>
				</CardHeader>
				<ProductsTable />
				<Button
					size="small"
					startIcon={<KeyboardArrowDownIcon />}
					sx={{
						m: 1,
					}}
				>
					Xem tất cả sản phẩm
				</Button>
			</Stack>
		</Card>
	);
}

const PURCHASES_DATA = [
	{
		id: uuid(),
		product: productsData.find((product) => product?.id === 1),
		sold: '3,345',
		stock: {
			title: '20 remaining',
			status: 'error',
		},
		added: '10/21/2017	',
		updated: 'an hour ago',
		location: 'MX',
		gain: 33.34,
	},
	{
		id: uuid(),
		product: productsData.find((product) => product?.id === 2),
		sold: '720',
		stock: {
			title: 'In stock',
			status: 'success',
		},
		added: '10/20/2017',
		updated: '3 hours ago',
		location: 'BE',
		gain: -21.2,
	},
	{
		id: uuid(),
		product: productsData.find((product) => product?.id === 3),
		sold: '1,445',
		stock: {
			title: 'In stock',
			status: 'success',
		},
		added: '10/19/2017	',
		updated: '5 hours ago	',
		location: 'PR',
		gain: 23.34,
	},
	{
		id: uuid(),
		product: productsData.find((product) => product?.id === 4),
		sold: '2,500',
		stock: {
			title: '45 remaining',
			status: 'warning',
		},
		added: '10/17/2017',
		updated: '1 day ago',
		location: 'AR',
		gain: 28.78,
	},
	{
		id: uuid(),
		product: productsData.find((product) => product?.id === 5),
		sold: '223',
		stock: {
			title: 'Paused',
			status: '',
		},
		added: '10/16/2017',
		updated: 'a week ago',
		location: 'GB',
		gain: -18.18,
	},
];

const STATUS_CONFIG = {
	success: {
		color: 'success.main',
	},
	error: {
		color: 'error.main',
	},
	warning: {
		color: 'warning.light',
	},
};

function ProductsTable() {
	return (
		<TableContainer>
			<Table aria-label="bảng mua hàng sản phẩm" size="medium">
				<TableHead>
					<TableRow>
						<TableCell>Sản phẩm</TableCell>
						<TableCell align="left" padding="none" sx={{ minWidth: 140 }}>
							Chi tiết sản phẩm
						</TableCell>
						<TableCell align="right">Đã bán</TableCell>
						<TableCell align="center">Quốc gia</TableCell>
						<TableCell align="left">Tăng trưởng</TableCell>
						<TableCell align="right">Ngày thêm</TableCell>
						<TableCell align="right">Cập nhật</TableCell>
						<TableCell align="center">Thao tác</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{PURCHASES_DATA.map((purchase) => (
						<ProductsTableRow key={purchase.id} purchase={purchase} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function ProductsTableRow({ purchase }) {
	const { product, sold, stock, gain, added, updated, location } = purchase;
	return (
		<TableRow hover>
			<TableCell>
				<img alt="Item Img" src={product?.productImg} height={40} />
			</TableCell>
			<TableCell align="left" padding="none">
				<Link
					href="#!"
					variant="subtitle1"
					underline="hover"
					color="text.primary"
					sx={{
						display: 'block',
						'&:hover': {
							color: 'primary.main',
						},
					}}
				>
					{product?.name}
				</Link>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box
						component="span"
						width={8}
						height={8}
						bgcolor={STATUS_CONFIG[stock?.status]?.color || '#d3d3d3'}
						borderRadius="50%"
					/>
					<Typography variant="caption" color="text.tertiary">
						{(() => {
							if (stock?.title === '20 remaining') return 'Còn 20';
							if (stock?.title === 'In stock') return 'Còn hàng';
							if (stock?.title === '45 remaining') return 'Còn 45';
							if (stock?.title === 'Paused') return 'Tạm dừng';
							return stock?.title;
						})()}
					</Typography>
				</Stack>
			</TableCell>
			<TableCell align="right">
				<Typography variant="body1" color="text.tertiary">
					{sold}
				</Typography>
			</TableCell>
			<TableCell align="center">
				<img alt="location" src={`https://flagsapi.com/${location}/flat/32.png`} height={30} />
			</TableCell>
			<TableCell align="left">
				<Typography variant="body1" color="text.tertiary">
					<Typography
						component="span"
						variant="inherit"
						color={`${Math.sign(gain) === 1 ? 'success.dark' : 'error.main'}`}
					>
						{Math.sign(gain) === 1 ? (
							<ArrowUpwardIcon fontSize="inherit" />
						) : (
							<ArrowDownwardIcon fontSize="inherit" />
						)}
						&nbsp;
						{gain}
						%&nbsp;
					</Typography>
					so với tuần trước
				</Typography>
			</TableCell>
			<TableCell align="right">
				<Typography variant="body1" color="text.tertiary">
					{added
						.replace('Today', 'Hôm nay')
						.replace('This Month', 'Tháng này')
						.replace('This Week', 'Tuần này')}
				</Typography>
			</TableCell>
			<TableCell align="right">
				<Typography variant="body1" color="text.tertiary">
					{updated
						.replace('an hour ago', '1 giờ trước')
						.replace('3 hours ago', '3 giờ trước')
						.replace('5 hours ago', '5 giờ trước')
						.replace('1 day ago', '1 ngày trước')
						.replace('a week ago', '1 tuần trước')}
				</Typography>
			</TableCell>
			<TableCell align="center">
				<IconButton size="small">
					<MoreHorizIcon fontSize="small" />
				</IconButton>
			</TableCell>
		</TableRow>
	);
}

export default ProductsSection;
