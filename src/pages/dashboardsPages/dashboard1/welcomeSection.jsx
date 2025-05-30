import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import PageHeader from '@/components/pageHeader';

function WelcomeSection() {
	return (
		<PageHeader title="Thống kê doanh thu">
			<Breadcrumbs aria-label="breadcrumb" sx={{ textTransform: 'uppercase' }}>
				<Link underline="hover" href="#!">
					Trang chủ
				</Link>
				<Typography color="text.tertiary">Thống kê doanh thu</Typography>
			</Breadcrumbs>
		</PageHeader>
	);
}

export default WelcomeSection;
