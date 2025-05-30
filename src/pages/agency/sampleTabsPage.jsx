import { useState } from 'react';
import calcHeaderHeight from '@helpers/layoutHeight';
import { v4 as uuid } from 'uuid';
// MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

import PageHeader from '@/components/pageHeader';
import CardHeader from '@/components/cardHeader';
import AgencyManagementTable from './widgets/tableAgency';

import agenciesData from '@/_mocks/agencies';
import { Button } from 'antd';
import { Box } from '@mui/material';
import Account from '../editProfile/account';
import Profile from '../editProfile/profile';
import Billing from '../editProfile/billing';
import { useSearchParams } from 'react-router-dom';

const menuOptions = [
	{
		id: uuid(),
		name: 'agencies',
		Icon: Person2OutlinedIcon,
		text: 'Danh sách đại lý',
		renderSection: <Section />,
	},
	{
		id: uuid(),
		name: 'account',
		Icon: AccountBoxOutlinedIcon,
		text: 'Thông tin đại lý',
		renderSection: <Account />,
	},
	{
		id: uuid(),
		name: 'profile',
		Icon: VpnKeyOutlinedIcon,
		text: 'Đăng nhập đại lý',
		renderSection: <Profile />,
	},
	{
		id: uuid(),
		name: 'billing',
		Icon: HandshakeOutlinedIcon,
		text: 'Hợp tác đại lý',
		renderSection: <Billing />,
	},
];

function SampleTabsPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const activeSection = searchParams.get('section') || menuOptions[0].name;

	const changeSectionHandler = (sectionName) => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		setSearchParams({ section: sectionName });
	};

	return (
		<>
			<PageHeader title="Quản lý đại lý" subtitle="Sample Tab Page">
				<Breadcrumbs
					aria-label="breadcrumb"
					sx={{
						textTransform: 'uppercase',
					}}
				>
					<Link underline="hover" href="#!">
						Inicio
					</Link>
					<Typography color="text.tertiary">Sample Tab Page</Typography>
				</Breadcrumbs>
			</PageHeader>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={4} md={3}>
					<Card
						sx={{
							position: 'sticky',
							top: `${calcHeaderHeight('nav', false) + 30}px`,
						}}
						component="aside"
					>
						<MenuList
							sx={{
								'& .MuiMenuItem-root': {
									borderRadius: 2,
								},
							}}
						>
							{menuOptions.map(({ id, name, Icon, text }) => (
								<MenuListItem
									key={id}
									text={text}
									Icon={Icon}
									onClick={() => changeSectionHandler(name)}
									selected={activeSection === name}
								/>
							))}
							<MenuItem component={Link} href="#!">
								<ListItemIcon>
									<Person2OutlinedIcon fontSize="medium" />
								</ListItemIcon>
								Tất cả đại lý
							</MenuItem>
						</MenuList>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					{menuOptions.find((option) => option.name === activeSection)?.renderSection}
				</Grid>
			</Grid>
		</>
	);
}

function MenuListItem({ Icon, text, ...props }) {
	return (
		<MenuItem {...props}>
			<ListItemIcon>
				<Icon fontSize="medium" />
			</ListItemIcon>
			{text}
		</MenuItem>
	);
}

function Section() {
	return (
		<Card
			sx={{
				minHeight: '100vh',
			}}
			type="section"
		>
			<CardHeader title="Quản lý đại lý" subtitle="">
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
				<AgencyManagementTable agencies={agenciesData} />
			</Box>
		</Card>
	);
}

export default SampleTabsPage;
