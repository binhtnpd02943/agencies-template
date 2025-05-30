import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Radio, Row, Space } from 'antd';

export const getColumnCustomSearchOrFilterProps = (_dataIndex, predefinedFilters) => {
	return {
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
			const handleApply = () => {
				if (selectedKeys) {
					setSelectedKeys(selectedKeys);
				} else {
					setSelectedKeys([]);
				}
				confirm();
			};

			const handleReset = () => {
				setSelectedKeys([]);
				clearFilters();
				confirm();
			};

			const handleRadioChange = (value) => {
				setSelectedKeys(value ? [value] : []);
			};

			return (
				<div style={{ padding: 10 }}>
					<Row type="flex" gutter={10} justify={'center'}>
						<Input
							prefix={<SearchOutlined className="text-gray-400" />}
							placeholder={`Tìm kiếm`}
							value={selectedKeys[0]}
							onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
							className="w-35"
						/>
					</Row>
					<Divider style={{ margin: '10px 0' }} />
					<div className="flex flex-col gap-2">
						<Radio.Group value={selectedKeys[0]} onChange={(e) => handleRadioChange(e.target.value)}>
							<div className="flex flex-col gap-2">
								{predefinedFilters.map((filter) => (
									<Radio key={filter.value} value={filter.value}>
										{filter.text}
									</Radio>
								))}
							</div>
						</Radio.Group>
					</div>
					<Space className="mt-4">
						<Button
							type="primary"
							onClick={handleApply}
							icon={<SearchOutlined />}
							size="small"
							style={{ width: 70 }}
						>
							Lọc
						</Button>
						<Button onClick={handleReset} size="small" style={{ width: 70 }}>
							Làm mới
						</Button>
					</Space>
				</div>
			);
		},
		filterIcon: (filtered) => <FilterFilled style={{ color: filtered ? '#1677ff' : undefined }} />,
	};
};
