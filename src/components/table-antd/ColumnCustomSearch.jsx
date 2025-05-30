import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

export const getColumnSearchProps = (dataIndex) => ({
	filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
		const handleApply = () => {
			confirm();
		};

		const handleReset = () => {
			setSelectedKeys([]);
			clearFilters();
			confirm();
		};

		return (
			<div className="p-2" onKeyDown={(e) => e.stopPropagation()}>
				<Input
					placeholder={`Tìm kiếm ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					className="mb-2 block w-full"
					style={{ width: '100%' }}
				/>

				<Space>
					<Button
						type="primary"
						onClick={handleApply}
						icon={<SearchOutlined />}
						size="small"
						className="w-25"
					>
						Tìm kiếm
					</Button>
					<Button onClick={handleReset} size="small" className="w-25">
						Làm mới
					</Button>
				</Space>
			</div>
		);
	},
	filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
});
