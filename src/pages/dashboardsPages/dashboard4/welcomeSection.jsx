import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function WelcomeSection() {
	return (
		<section>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={6}>
					<WelcomeCard />
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<SideCard />
				</Grid>
			</Grid>
		</section>
	);
}

function WelcomeCard() {
	return (
		<Stack spacing={2}>
			<Typography variant="h5" fontSize={24}>
				Hiệu suất Phân phối Theo Khu Vực
			</Typography>
			<Typography variant="body2" color="text.tertiary" fontSize={15}>
				Theo dõi chi tiết hiệu quả phân phối bảo hiểm ở từng khu vực, hỗ trợ bạn đưa ra chiến lược kinh doanh
				tối ưu và phát triển mạng lưới đại lý hiệu quả.
			</Typography>

			<Typography pt={4} variant="subtitle1" fontWeight="500" textTransform="uppercase">
				Tổng kết thu nhập của bạn
			</Typography>
			<Grid
				container
				sx={{
					borderRadius: 1,
					overflow: 'hidden',
					bgcolor: 'background.paper',
					boxShadow: 26,
					'--Grid-borderWidth': '1px',
					borderTop: 'var(--Grid-borderWidth) solid',
					borderLeft: 'var(--Grid-borderWidth) solid',
					borderColor: 'border',
					'& > div': {
						borderRight: 'var(--Grid-borderWidth) solid',
						borderBottom: 'var(--Grid-borderWidth) solid',
						borderColor: 'border',
					},
				}}
			>
				<Grid item xs={12} sm={6} md={6}>
					<EarningCard title="Thu nhập hôm nay" value={950} />
				</Grid>
				<Grid item xs={12} sm={6} md={6}>
					<EarningCard title="Thu nhập tuần này" value="12,420" />
				</Grid>
			</Grid>
		</Stack>
	);
}

function EarningCard({ title, value }) {
	return (
		<Stack spacing={0} p={3}>
			<Typography variant="subtitle2" textTransform="uppercase" color="text.tertiary">
				{title}
			</Typography>
			<Typography fontSize={30}>${value}</Typography>
			<Typography variant="caption">Dựa trên giá niêm yết</Typography>
		</Stack>
	);
}

function SideCard() {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'grid',
				placeItems: 'center',
			}}
		>
			<Stack p={1} spacing={4} direction="column" textAlign="center">
				<Typography variant="h3" fontWeight="500">
					Giao Diện Quản Trị Đại Lý Bảo Hiểm Phản Hồi Linh Hoạt
				</Typography>
				<Typography variant="body2" color="text.tertiary" fontSize={15}>
					Nền tảng hỗ trợ phân tích chi tiết theo khu vực, thống kê hiệu suất và quản lý đội ngũ đại lý tối
					ưu.
				</Typography>

				<Stack
					direction={{
						xs: 'column',
						sm: 'row',
					}}
					spacing={2}
					width="100%"
				>
					<Button variant="contained" fullWidth disableElevation size="large" color="primary">
						Cài đặt tài khoản
					</Button>
					<Button variant="contained" fullWidth disableElevation size="large" color="secondary">
						Nâng cấp tài khoản
					</Button>
				</Stack>
			</Stack>
		</Card>
	);
}

export default WelcomeSection;
