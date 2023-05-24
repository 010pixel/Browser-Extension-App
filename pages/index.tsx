import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import ExtensionGrid from '@/src/ExtensionGrid/ExtensionGrid';
import exntensions from '../shared/data';
import { BrowserExtension } from '../common/interface';

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
					color: '#000',
					textShadow: '2px 2px 2px #fafafa',
					backgroundImage: 'url(/images/home-banner-bg.jpeg)',
					backgroundSize: 'cover',
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
				<Grid>
					<script type="text/javascript">
						var aax_size='728x90'; var aax_pubname = '010pixel-21'; var aax_src='302'; const s =
						document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src =
						"https://c.amazon-adsystem.com/aax2/assoc.js"; document.getElementsByTagName('head')[0].appendChild(s);
					</script>
				</Grid>
			</Container>
		</div>
	);
}
