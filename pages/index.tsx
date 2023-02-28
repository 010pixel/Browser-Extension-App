import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import exntensions from '../shared/data';
import { BrowserExtension } from '../common/interface';
import ExtensionGrid from '@/src/ExtensionGrid/ExtensionGrid';

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
						<ExtensionGrid
							extensions={exntensions.filter((item: BrowserExtension) => {
								return item.showOnHome !== false;
							})}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
