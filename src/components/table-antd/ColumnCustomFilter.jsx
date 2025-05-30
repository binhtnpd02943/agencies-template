import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import { Button, Col, InputNumber, Radio, Row, Space } from 'antd';

export const getColumnCustomFilterProps = (dataIndex) => {
	const predefinedFilters = [
		{ text: '100 - 1,000', value: '100,1000' },
		{ text: '1,000 - 10,000', value: '1000,10000' },
		{ text: '10,000 - 100,000', value: '10000,100000' },
		{ text: '100,000 - 1,000,000', value: '100000,1000000' },
		{ text: '1,000,000 - 10,000,000', value: '1000000,10000000' },
		{ text: 'Trên 10,000,000', value: '10000000,' },
	];

	const predefinedProducts = [
		{ text: '1 - 100', value: '1,100' },
		{ text: '100 - 1,000', value: '100,1000' },
		{ text: '1,000 - 10,000', value: '1000,10000' },
		{ text: '10,000 - 100,000', value: '10000,100000' },
		{ text: '100,000 - 1,000,000', value: '100000,1000000' },
		{ text: 'Trên 1,000,000', value: '1000000,' },
	];

	const filtersToUse = dataIndex === 'totalProduct' ? predefinedProducts : predefinedFilters;

	return {
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
			const selectedValue = selectedKeys[0] ? selectedKeys[0].split(',') : ['', ''];
			const startValue = selectedValue[0] ? selectedValue[0] : '';
			const endValue = selectedValue[1] ? selectedValue[1] : '';

			const handleApply = () => {
				if (startValue || endValue) {
					setSelectedKeys([`${startValue},${endValue}`]);
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

			const handleValueChange = (type, value) => {
				if (type === 'start') {
					setSelectedKeys([`${value ?? ''},${endValue}`]);
				} else {
					setSelectedKeys([`${startValue},${value ?? ''}`]);
				}
			};

			const isCheckFilter = Number(endValue) > 0 && Number(endValue) < Number(startValue);

			const handleKeyPress = (event) => {
				if (event.key === 'Enter' && !isCheckFilter) {
					confirm();
				}
			};

			return (
				<div style={{ padding: 10 }}>
					<Row type="flex" gutter={10} style={{ marginBottom: 8, alignItems: 'center' }}>
						<Col className="flex flex-col">
							<InputNumber
								min={0}
								type="number"
								className="my-2"
								value={startValue}
								onChange={(value) => handleValueChange('start', value)}
								onKeyUp={handleKeyPress}
								placeholder="Bắt đầu"
							/>
							{isCheckFilter && <span className="text-red text-xs italic">&nbsp;</span>}
						</Col>
						<Col className="flex flex-col">
							<InputNumber
								min={0}
								type="number"
								className="my-2"
								value={endValue}
								onChange={(value) => handleValueChange('end', value)}
								onKeyUp={handleKeyPress}
								placeholder="Kết thúc"
							/>
							{isCheckFilter && <span className="text-red text-xs italic">{'Lớn hơn bắt đầu'}</span>}
						</Col>
					</Row>

					<div className="flex flex-col gap-2">
						<Radio.Group value={selectedKeys[0]} onChange={(e) => handleRadioChange(e.target.value)}>
							<div className="flex flex-col gap-2">
								{filtersToUse.map((filter) => (
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
							disabled={isCheckFilter}
							onClick={handleApply}
							icon={<SearchOutlined />}
							size="small"
							style={{ width: 90 }}
						>
							Lọc
						</Button>
						<Button onClick={handleReset} size="small" style={{ width: 90 }}>
							Làm mới
						</Button>
					</Space>
				</div>
			);
		},
		filterIcon: (filtered) => <FilterFilled style={{ color: filtered ? '#1677ff' : undefined }} />,
	};
};
