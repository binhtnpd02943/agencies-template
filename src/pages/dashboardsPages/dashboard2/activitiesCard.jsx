import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import PostAddIcon from '@mui/icons-material/PostAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import CardHeader from '@/components/cardHeader';

const ACTIVITIES_DATA = [
	{
		title: 'Báo cáo đã được cập nhật',
		color: 'info.main',
		Icon: BarChartIcon,
	},
	{
		title: 'Đã mở khóa thành tích',
		color: 'success.main',
		Icon: MilitaryTechIcon,
	},
	{
		title: 'Đã thêm hình ảnh mới',
		color: 'warning.main',
		Icon: ImageOutlinedIcon,
	},
	{
		title: 'Báo cáo đã được cập nhật',
		color: 'tertiary.main',
		Icon: PostAddIcon,
	},
];

function ActivitiesCard() {
	return (
		<Card>
			<CardHeader
				title="Hoạt động gần đây"
				size="small"
				sx={{
					mb: 2,
				}}
				subtitle="Hoạt động gần nhất cách đây 1 giờ"
			/>
			<Stack direction="column" spacing={0}>
				{ACTIVITIES_DATA.map((activity, index) => (
					<ActivityListItem key={index} activity={activity} />
				))}
			</Stack>
		</Card>
	);
}

function ActivityListItem({ activity: { title, color, Icon } }) {
	return (
		<Stack
			direction="row"
			position="relative"
			spacing={2}
			overflow="hidden"
			sx={{
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 25,
					height: '100%',
					borderLeft: 2,
					borderColor: (theme) => theme.palette.border,
				},
			}}
		>
			<Avatar
				sx={{
					bgcolor: color,
					width: 50,
					height: 50,
				}}
			>
				<Icon fontSize="medium" />
			</Avatar>
			<Stack spacing={0.5} pb={2} pt={1}>
				<Typography variant="h6">{title}</Typography>
				<Typography variant="body1" color="text.secondary">
					Aenean vulputate eleifend tellus. Aenean leo.
				</Typography>
				<Typography variant="caption">2 giờ trước</Typography>
			</Stack>
		</Stack>
	);
}

export default ActivitiesCard;
