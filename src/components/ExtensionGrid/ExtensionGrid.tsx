import * as React from 'react';
import { browserImageMapping } from '@/common/constants';
import { BrowserExtension, ExtensionLink } from '@/common/interface';
import Link from '@/src/Links';
import { Avatar, Box, Card, CardHeader, Typography } from '@mui/material';

interface ExtensionGridProps {
	extensions: BrowserExtension[];
}

const ExtensionGrid: React.FC<ExtensionGridProps> = (props: ExtensionGridProps) => {
	return (
		<>
			{props.extensions.map((item: BrowserExtension) => {
				const key = `${item.slug}_${Math.random()}`;
				return (
					<Link key={key} href={`/item/${encodeURIComponent(item.slug)}`} sx={{ textDecoration: 'none' }}>
						<Card sx={{ width: 280, borderRadius: 3 }}>
							<CardHeader
								avatar={<Avatar src={item?.logo} sx={{ width: 64, height: 64 }} />}
								title={
									<Typography variant="body2" fontWeight={500} color="inherit">
										{item?.name}
									</Typography>
								}
								subheader={
									<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1 }}>
										{item.links.map((link: ExtensionLink) => {
											return (
												<Avatar
													src={`/images/browsers/${browserImageMapping[link.browser]}.svg`}
													sx={{ width: 16, height: 16 }}
												/>
											);
										})}
									</Box>
								}
							/>
						</Card>
					</Link>
				);
			})}
		</>
	);
};

export default ExtensionGrid;
