import { useState } from 'react';

import Card from '@mui/material/Card';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import CardHeader from '@/components/cardHeader';

function TodoListCard() {
	return (
		<Card>
			<CardHeader
				title="Danh sách công việc"
				size="small"
				sx={{
					mb: 2,
				}}
			/>
			<FormGroup>
				<TodoItem text="Làm một việc gì đó" defaultChecked />
				<TodoItem text="Làm thêm việc khác" />
				<TodoItem text="Làm việc khác nữa" defaultChecked />
				<TodoItem text="Làm lại một việc" defaultChecked />
				<TodoItem text="Làm thêm một việc nữa" defaultChecked />
				<TodoItem text="Làm nhiều việc hơn" />
				<TodoItem text="Làm thêm một việc nữa" defaultChecked />
				<TodoItem text="Hoàn thành một việc" />
				<TodoItem text="Hoàn thành thêm một việc" />
			</FormGroup>
		</Card>
	);
}

function TodoItem(props) {
	const { defaultChecked = false, text, color = 'primary' } = props;
	const [checked, setChecked] = useState(defaultChecked);
	return (
		<FormControlLabel
			slotProps={{
				typography: {
					sx: {
						textDecoration: checked ? 'line-through' : '',
					},
				},
			}}
			control={
				<Checkbox
					onChange={(e) => setChecked(e.target.checked)}
					defaultChecked={defaultChecked}
					value={checked}
					size="small"
					sx={{
						p: 0.5,
						px: 1,
					}}
					color={color}
				/>
			}
			label={text}
		/>
	);
}

export default TodoListCard;
