import * as React from 'react';
import { ChangeLogChange, ChangeLogItem, ChangeLogType } from '@/common/interface';
import { Paper, Typography } from '@mui/material';

interface ChangeLogProps {
	data: ChangeLogItem[];
}

const ChangeLog: React.FC<ChangeLogProps> = (props) => {
	const { data } = props;
	console.log(data);
	return (
		<Paper elevation={2} sx={{ paddingX: 4, paddingTop: 1, paddingBottom: 2, marginY: 4 }}>
			<Typography variant="h4" component="h2" fontWeight={600} sx={{ marginY: 2, textDecoration: 'underline' }}>
				Changelog
			</Typography>
			{data?.length ? (
				data.map((item) => {
					const { version, date, changes } = item;
					const changesByType: { [key: string]: ChangeLogChange[] } = {
						[ChangeLogType.Unspecified]: changes.filter(
							(change) => !change.type || change.type === ChangeLogType.Unspecified
						),
						[ChangeLogType.Added]: changes.filter((change) => change.type === ChangeLogType.Added),
						[ChangeLogType.Changed]: changes.filter((change) => change.type === ChangeLogType.Changed),
						[ChangeLogType.Fixed]: changes.filter((change) => change.type === ChangeLogType.Fixed),
						[ChangeLogType.Removed]: changes.filter((change) => change.type === ChangeLogType.Removed),
						[ChangeLogType.Deprecated]: changes.filter((change) => change.type === ChangeLogType.Deprecated),
						[ChangeLogType.Security]: changes.filter((change) => change.type === ChangeLogType.Security),
					};
					return (
						<div>
							<Typography variant="subtitle1" component="h2" fontWeight={600}>
								v{version} <small>({date})</small>
							</Typography>
							{changes.length && (
								<div>
									{Object.keys(changesByType).map((changeType: string) => {
										const changesForType = changesByType[changeType];
										if (changesForType.length === 0) {
											return null;
										}
										const changesText = changesForType.map((change) => {
											return (
												<Typography variant="body2" component="li">
													{change.text}
												</Typography>
											);
										});
										return (
											<div>
												{changeType && changeType !== ChangeLogType.Unspecified && (
													<Typography
														variant="overline"
														component="h3"
														fontWeight={600}
														sx={{ textTransform: 'capitalize', paddingLeft: 2 }}
													>
														{changeType}
													</Typography>
												)}
												{changesText && <ul style={{ margin: '0 0 16px' }}>{changesText}</ul>}
											</div>
										);
									})}
								</div>
							)}
						</div>
					);
				})
			) : (
				<Typography variant="body2" component="p">
					No changes available.
				</Typography>
			)}
		</Paper>
	);
};

export default ChangeLog;
