import { createStyles } from 'antd-style';

const useStyle = createStyles(({ css }) => ({
	customTable: css`
		.ant-table {
			.ant-table-container {
				.ant-table-body,
				.ant-table-content {
					scrollbar-width: thin;
					scrollbar-color: #eaeaea transparent;
					scrollbar-gutter: stable;

					&::-webkit-scrollbar {
						width: 6px;
					}
					&::-webkit-scrollbar-thumb {
						background-color: #eaeaea;
						border-radius: 4px;
					}
					&::-webkit-scrollbar-track {
						background: transparent;
					}
				}
			}
		}
	`,
}));

export default useStyle;
