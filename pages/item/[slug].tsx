import { GetStaticProps } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useEffect } from 'react';
import { broswerNameMapping, browserImageMapping } from '@/common/constants';
import AmazonBanner from '@/src/components/AmazonBanner/AmazonBanner';
import ChangeLog from '@/src/components/ChangeLog/ChangeLog';
import ExtensionGrid from '@/src/components/ExtensionGrid/ExtensionGrid';
import { Avatar, Button, Card, CardContent, Fade, Grid, Link, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BrowserExtension, ExtensionLink } from '../../common/interface';
import { doPageRedirection, trackPageView } from '../../common/utils';
import exntensions from '../../shared/data';

function ItemPage({ item, pageMeta }: any) {
	const [extensionToShow, setExtensionToShow] = React.useState<BrowserExtension[]>([]);

	const itemHtml = (
		<Fade in timeout={500}>
			<Grid container my={5} spacing={0} minHeight={160}>
				<Grid
					xs={12}
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					textAlign="center"
					item
				>
					<Avatar src={item?.logo} sx={{ width: 94, height: 94, mt: 5 }} />
					<Typography variant="h2" fontWeight={600} color="inherit" my={5}>
						{item?.name}
					</Typography>
					{item?.description && (
						<Typography variant="h6" fontWeight={400} color="inherit">
							{item?.description}
						</Typography>
					)}
				</Grid>
			</Grid>
		</Fade>
	);

	useEffect(() => {
		if (!item) {
			return;
		}
		trackPageView();
	}, [item]);

	useEffect(() => {
		if (extensionToShow.length) {
			return;
		}
		const selectedExtensions = exntensions
			.filter((ext: BrowserExtension) => {
				return ext.showOnHome !== false && ext.slug !== item.slug;
			})
			.sort(() => 0.5 - Math.random())
			.slice(0, 6);
		setExtensionToShow(selectedExtensions);
	}, [extensionToShow, setExtensionToShow, item]);

	useEffect(() => {
		doPageRedirection(item.pageRedirection, 'MAIN');
	}, []);

	return (
		<>
			<Head>
				<title>{pageMeta.title}</title>
				<meta name="description" content={pageMeta.description} />
			</Head>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#f5f5f5',
					// background: `linear-gradient(98deg, ${item.colorText}, #fff, #f5f5f5, ${item.colorText})`,
					backgroundImage:
						'url(https://images.unsplash.com/photo-1529686159790-3246c5082afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
					backgroundSize: 'cover',
					textShadow: '2px 2px 2px #fafafa',
					color: item.colorText || '#000',
				}}
			>
				<Container maxWidth="lg">
					<div data-testid="item-component">{itemHtml}</div>
				</Container>
			</Box>
			<Container maxWidth="lg">
				<Paper elevation={2} sx={{ my: 5, p: 3 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 8,
							py: 3,
						}}
					>
						<Grid>
							<Typography variant="h4" fontWeight={600} color="inherit" align="center">
								Download the extension
							</Typography>
							<Typography variant="h6" fontWeight={400} color="inherit" align="center">
								We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us
								to prioritize
							</Typography>
						</Grid>
						<Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
							{item.links.map((link: ExtensionLink) => {
								return (
									<Grid item>
										<Card sx={{ minWidth: 225, borderRadius: 3 }} raised>
											<CardContent
												sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, py: 5 }}
											>
												<Avatar
													src={`/images/browsers/${browserImageMapping[link.browser]}.svg`}
													sx={{ width: 94, height: 94 }}
												/>
												<Typography variant="h6" fontWeight={600} color="inherit">
													Add to {broswerNameMapping[link.browser]}
												</Typography>
												<hr style={{ width: '100%', borderTop: '1px dashed #ccc' }} />
												<Link href={link.url} target="_blank">
													<Button fullWidth variant="contained" color="primary">
														Install Extension
													</Button>
												</Link>
											</CardContent>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</Box>
				</Paper>
				<AmazonBanner />
				<ChangeLog data={item.changelog} />
				<Paper elevation={2} sx={{ my: 5, p: 3 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 8,
							py: 3,
						}}
					>
						<Grid>
							<Typography variant="h4" fontWeight={600} color="inherit" align="center">
								More for you
							</Typography>
							<Grid container sx={{ justifyContent: 'space-evenly', gap: 5, mt: 5 }}>
								<ExtensionGrid extensions={extensionToShow} />
							</Grid>
						</Grid>
					</Box>
				</Paper>
			</Container>
		</>
	);
}

export async function getStaticPaths() {
	const paths = exntensions.map((ext: BrowserExtension) => ({
		params: { slug: ext.slug.toString() },
	}));
	return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as any;
	const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;

	const pageMeta: any = {};
	if (item) {
		pageMeta.title = item.name;
		pageMeta.description = item.description;
	} else {
		pageMeta.title = `404: ${slug} not found`;
		pageMeta.description = `404: ${slug} not found`;
	}

	return {
		props: {
			slug,
			item,
			pageMeta,
		},
	};
};

export default ItemPage;
