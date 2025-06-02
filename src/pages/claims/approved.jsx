// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import { Box, Grid } from '@mui/material';
import { Button } from 'antd';
import claimApprovedData from '@/_mocks/claimApproved';
import ClaimApprovedManagementTable from './widgets/approved/tableApproved';

function ClaimApprovedPage() {
	return (
		<>
			<PageHeader title="Hợp đồng chi bồi thường" subtitle="Sample Page">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Hợp đồng chi bồi thường</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
				<CardHeader title="Danh sách hợp đồng chi bồi thường" subtitle="Bộ lọc và sắp xếp">
					Optional Action
				</CardHeader>

				<Grid container alignItems="center" spacing={1}>
					<Grid item>
						<Button type="dashed">Xóa sắp xếp</Button>
					</Grid>
					<Grid item>
						<Button type="dashed">Xóa bộ lọc</Button>
					</Grid>
					<Grid item>
						<Button type="dashed">Xóa cả bộ lọc và sắp xếp</Button>
					</Grid>
				</Grid>

				<Box sx={{ mt: 2 }}>
					<ClaimApprovedManagementTable claimApproved={claimApprovedData} />
				</Box>
			</Card>
		</>
	);
}

export default ClaimApprovedPage;
