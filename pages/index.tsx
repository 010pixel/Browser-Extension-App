import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Card, CardHeader, Container, Grid } from '@mui/material';
import { browserImageMapping } from '@/common/constants';
import exntensions from '../shared/data';
import { BrowserExtension, ExtensionLink } from '../common/interface';
import Link from '../src/Links';

export default function Home() {
	return (
		<div data-testid="home-component">
			<Grid
				container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					py: 8,
					backgroundColor: '#f5f5f5',
				}}
			>
				<Container>
					<Typography variant="h2" component="h1" fontWeight={600} gutterBottom textAlign="center" color="0A1929">
						Browser Extensions
					</Typography>
					<Typography variant="h6" component="h2" gutterBottom textAlign="center">
						Make your life fun and easy with these browser extensions
					</Typography>
				</Container>
			</Grid>{' '}
			<Container>
				<Grid>
					<Grid container sx={{ justifyContent: 'space-evenly', gap: 5, my: 8 }}>
						{exntensions
							.filter((item: BrowserExtension) => {
								return item.showOnHome !== false;
							})
							.map((item: BrowserExtension) => {
								return (
									<>
										<Link href={`/item/${encodeURIComponent(item.slug)}`} sx={{ textDecoration: 'none' }}>
											<Card sx={{ width: 280, borderRadius: 3 }}>
												<CardHeader
													avatar={<Avatar src={item?.logo} sx={{ width: 64, height: 64 }} />}
													title={
														<Typography variant="body2" fontWeight={500} color="inherit">
															{item?.name}
														</Typography>
													}
													subheader={
														<>
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
														</>
													}
												/>
											</Card>
										</Link>
									</>
								);
							})}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
