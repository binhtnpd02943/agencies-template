import { useState, useMemo } from 'react';
import Empty from '@/components/empty';
import { Pagination, Table } from 'antd';
import AGENT_MANAGEMENT_COLUMN_DEFS from './columnAgency';
import useStyle from '@/components/table-antd/useStyle';

function AgencyManagementTable({ agencies, setSortChange, setFilterData, filterSearchParams, sortParams }) {
	const { styles } = useStyle();

	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;

	const handleOnChangeSortFilter = (pagination, filters, sorter) => {
		setSortChange(sorter);
		setFilterData(filters);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		return agencies.data.slice(startIndex, endIndex);
	}, [agencies.data, currentPage]);

	return (
		<div className="flex flex-col flex-1">
			<div className="flex flex-1 flex-col gap-[22px]">
				<Table
					className={styles.customTable}
					columns={AGENT_MANAGEMENT_COLUMN_DEFS({ filterSearchParams, sortParams })}
					dataSource={paginatedData}
					onChange={handleOnChangeSortFilter}
					rowKey={(record) => record.id}
					locale={{ emptyText: <Empty text="Không có dữ liệu" /> }}
					pagination={false}
					scroll={{ x: 'max-content' }}
				/>
			</div>

			<div className="flex justify-end w-full my-10 pr-10">
				<Pagination
					current={currentPage}
					pageSize={pageSize}
					total={agencies.total}
					onChange={handlePageChange}
				/>
			</div>
		</div>
	);
}

export default AgencyManagementTable;
