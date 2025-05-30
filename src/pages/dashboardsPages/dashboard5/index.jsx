import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CardHeader from '@/components/cardHeader';

import HoursSection from './hoursSection';
import ReportSection from './reportSection';
import PopularProductsSection from './popularProductsSection';

function Dashboard5() {
	return (
		<>
			<Header />
			<TabsNav />
			<HoursSection />
			<Divider
				sx={{
					my: 8,
				}}
			/>
			<ReportSection />
			<Divider
				sx={{
					my: 8,
				}}
			/>
			<PopularProductsSection />
		</>
	);
}

function Header() {
	return (
		<CardHeader
			sx={{
				mt: 4,
			}}
			size="large"
			title="Chào buổi sáng, Katherine!"
			subtitle={`Hôm nay là ${new Date().toLocaleDateString('vi-VN', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})}`}
		>
			<Stack
				pt={{ xs: 5, sm: 0 }}
				divider={<Divider orientation="vertical" flexItem />}
				direction="row"
				alignItems="center"
				spacing={3}
			>
				<Stack direction="row" spacing={2} alignItems="center">
					<Typography variant="subtitle1" fontSize={35} display="inline">
						$1,433
					</Typography>
					<Typography variant="caption" textTransform="uppercase">
						Thu nhập <br />
						hôm nay
					</Typography>
				</Stack>
				<Stack direction="row" spacing={2} alignItems="center">
					<Typography variant="subtitle1" fontSize={35} display="inline">
						$296
					</Typography>
					<Typography variant="caption" textTransform="uppercase">
						Chi phí <br />
						hôm nay
					</Typography>
				</Stack>
			</Stack>
		</CardHeader>
	);
}

function TabsNav() {
	const [value, setValue] = useState(0);
	const [slot, setSlot] = useState('Hôm nay');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box
			sx={{
				borderBottom: 1,
				borderColor: 'divider',
			}}
		>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="scrollable"
				aria-label="chế độ xem"
				scrollButtons="auto"
				allowScrollButtonsMobile
			>
				<Tab label="Tổng quan" />
				<Tab label="Nhân sự" />
				<Tab label="Sản phẩm" />
				<Tab label="Khác" />
				<Box flexGrow={1} />
				<Stack direction="row" alignItems="center" spacing={0}>
					{['Hôm nay', 'Tuần này', 'Tháng này'].map((tab, i) => (
						<Button
							key={i}
							size="small"
							onClick={() => setSlot(tab)}
							variant={slot === tab ? 'outlined' : 'text'}
							sx={{
								color: slot === tab ? 'primary.main' : 'text.secondary',
							}}
						>
							{tab}
						</Button>
					))}
				</Stack>
			</Tabs>
		</Box>
	);
}

export default Dashboard5;
