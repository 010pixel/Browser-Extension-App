import * as React from 'react';
import Link from '@/src/Links';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
	return (
		<AppBar position="sticky" color="default">
			<Toolbar variant="dense">
				<Typography variant="inherit" color="inherit" noWrap>
					<Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
						Browser Extensions | 010 Pixel
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
