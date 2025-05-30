import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import CardHeader from '@/components/cardHeader';

import customersData from '@/_mocks/customers';

const ACTIVITIES_DATA = [
	{
		title: 'Đã chốt giao dịch!',
		user: customersData.find((product) => product?.id === 6),
	},
	{
		title: 'Vừa đạt ngân sách ngày!',
		user: customersData.find((product) => product?.id === 7),
	},
	{
		title: 'Nổi bật!',
		user: customersData.find((product) => product?.id === 8),
	},
	{
		title: 'Vừa đạt ngân sách tháng',
		user: customersData.find((product) => product?.id === 9),
	},
	{
		title: 'Vừa đạt ngân sách tháng',
		user: customersData.find((product) => product?.id === 10),
	},
];

function ActivitiesCard() {
	return (
		<Card
			sx={{
				height: '100%',
			}}
		>
			<CardHeader title="Hoạt động người dùng" size="small" subtitle="Hoạt động gần nhất cách đây 1 giờ">
				<Button size="small">Xem tất cả</Button>
			</CardHeader>
			<Stack direction="column" height="100%" py={2}>
				{ACTIVITIES_DATA.map((activity, index) => (
					<ActivityListItem key={index} activity={activity} />
				))}
			</Stack>
		</Card>
	);
}

function ActivityListItem({ activity: { title, user } }) {
	return (
		<Stack
			flexGrow={1}
			direction="row"
			position="relative"
			spacing={2}
			overflow="hidden"
			sx={{
				'&:not(:last-child)::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 18.5,
					height: '100%',
					border: 0,
					borderLeft: 3,
					borderStyle: 'dashed',
					borderColor: (theme) => theme.palette.border,
				},
			}}
		>
			<Avatar
				sx={{
					width: 40,
					height: 40,
				}}
				src={user.avatarImg}
			/>
			<Stack spacing={0.5} pb={2} pt={0}>
				<Typography variant="h5">{user.name}</Typography>
				<Typography variant="body1" color="text.secondary">
					{title}
				</Typography>
			</Stack>
		</Stack>
	);
}

export default ActivitiesCard;
