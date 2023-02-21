import * as React from 'react';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import exntensions from '../shared/data';
import { BrowserExtension, ExtensionLink } from '../common/interface';
import Link from '../src/Links';

export default function Home() {
	return (
		<div data-testid="home-component">
			<div style={{ textAlign: 'center', padding: '50px 20px' }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Browser-Extensions
				</Typography>
				<hr />
				<Typography variant="h6" component="h2" gutterBottom>
					Repo for hosting all the browser extension related static pages
				</Typography>
				<hr />
				<div>
					<ul>
						{exntensions
							.filter((item: BrowserExtension) => {
								return item.showOnHome !== false;
							})
							.map((item: BrowserExtension) => {
								return (
									<li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
										{item?.logo && (
											<Image src={item.logo} alt={item.name} width={16} height={16} style={{ marginRight: '8px' }} />
										)}
										<Link href={`/item/${encodeURIComponent(item.slug)}`}>{item.name}</Link>
										&nbsp;|&nbsp;
										{item.links.map((link: ExtensionLink) => {
											return (
												<>
													<Link href={link.url} target="_blank" rel="noreferrer">
														{link.browser}
													</Link>
													,{' '}
												</>
											);
										})}
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
}
