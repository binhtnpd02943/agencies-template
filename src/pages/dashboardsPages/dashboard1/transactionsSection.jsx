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
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import customersData from '@/_mocks/customers';

function TransactionsSection() {
	return (
		<Card type="none">
			<Stack direction="column" alignItems="flex-start">
				<Typography variant="h5" textTransform="uppercase" m={2}>
					Lịch sử giao dịch người dùng
				</Typography>
				<TransactionsTable />
				<Button
					size="small"
					startIcon={<KeyboardArrowDownIcon />}
					sx={{
						m: 1,
					}}
				>
					Xem tất cả lịch sử giao dịch
				</Button>
			</Stack>
		</Card>
	);
}

const TRANSACTIONS_DATA = [
	{
		id: uuid(),
		userId: 1,
		user: customersData.find((customer) => customer?.id === 1),
		transId: '1234567890',
		type: {
			title: 'Đã xác minh email',
			status: 'success',
		},
		date: 'Vừa xong',
	},
	{
		id: uuid(),
		userId: 1,
		user: customersData.find((customer) => customer?.id === 2),
		transId: '4234592890',
		type: {
			title: 'Chờ xác minh',
			status: 'warning',
		},
		date: '21/04/2017 8:34',
	},
	{
		id: uuid(),
		userId: 1,
		user: customersData.find((customer) => customer?.id === 3),
		transId: '7245567890',
		type: {
			title: 'Mua hàng thành công',
			status: 'success',
		},
		date: '10/04/2017 16:40',
	},
	{
		id: uuid(),
		userId: 1,
		user: customersData.find((customer) => customer?.id === 4),
		transId: '8234568790',
		type: {
			title: 'Thanh toán bị giữ',
			status: 'error',
		},
		date: '02/04/2017 18:45',
	},
	{
		id: uuid(),
		userId: 1,
		user: customersData.find((customer) => customer?.id === 5),
		transId: '7234524890',
		type: {
			title: 'Tài khoản đã bị vô hiệu hóa',
			status: '',
		},
		date: '30/03/2017 10:30',
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

function TransactionsTable() {
	return (
		<TableContainer>
			<Table aria-label="products purchases table" size="medium">
				<TableHead>
					<TableRow>
						<TableCell> </TableCell>
						<TableCell align="left">Người dùng</TableCell>
						<TableCell align="left">Loại</TableCell>
						<TableCell align="left">Thời gian</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{TRANSACTIONS_DATA.map((transaction) => (
						<TransactionRow key={transaction.id} transaction={transaction} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function TransactionRow({ transaction }) {
	const { user, transId, type, date } = transaction;
	return (
		<TableRow hover>
			<TableCell>
				<Avatar
					alt="Ảnh người dùng"
					src={user?.avatarImg}
					sx={{
						width: 40,
						height: 40,
					}}
				/>
			</TableCell>
			<TableCell align="left">
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
					{user?.name}
				</Link>
				<Typography variant="caption">MÃ GD: {transId}</Typography>
			</TableCell>
			<TableCell align="left">
				<Stack direction="row" alignItems="center" spacing={1}>
					<Box
						component="span"
						width={8}
						height={8}
						bgcolor={STATUS_CONFIG[type?.status]?.color || '#d3d3d3'}
						borderRadius="50%"
					/>
					<Typography variant="caption" color="text.tertiary">
						{type?.title}
					</Typography>
				</Stack>
			</TableCell>
			<TableCell align="left" size="small">
				<Typography variant="body1" color="text.tertiary">
					{date}
				</Typography>
			</TableCell>
		</TableRow>
	);
}

export default TransactionsSection;
