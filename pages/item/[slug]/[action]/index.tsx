import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import AmazonBanner from '@/src/components/AmazonBanner/AmazonBanner';
import ExtensionGrid from '@/src/components/ExtensionGrid/ExtensionGrid';
import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { extensionActions, EXTENSION_ACTIONS, GAEventsByAction } from '../../../../common/constants';
import { BrowserExtension } from '../../../../common/interface';
import { doPageRedirection, trackPurchase } from '../../../../common/utils';
import exntensions from '../../../../shared/data';
import { getActionMsg, notice } from '../../../../src/constants';

function ActionPage({ slug, action, item, actionName, pageMeta, analyticsEventActions }: any) {
	const { query } = useRouter();
	const [extensionToShow, setExtensionToShow] = React.useState<BrowserExtension[]>([]);
	const pageRedirection = doPageRedirection(item?.pageRedirection, actionName?.toUpperCase());

	useEffect(() => {
		if (item) {
			trackPurchase({
				appName: item.name,
				item_id: item.slug,
				version: query.version,
				analyticsEventActions,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		pageRedirection.doRedirection();
	}, []);

	if (!item) {
		return `404: ${slug} not found!`;
	}

	if (!actionName) {
		return `404: ${action} not found!`;
	}

	const msg = getActionMsg((action as string)?.toLocaleUpperCase(), item, query.version as string) as any;

	return (
		<>
			<Head>
				<title>{pageMeta.title}</title>
				<meta name="description" content={pageMeta.description} />
			</Head>
			<Container maxWidth="lg">
				<div data-testid="action-component">
					{['google-meet-easy-mute', 'easy-mute-for-google-meet'].includes(item.slug) && (
						<Card sx={{ maxWidth: 345, backgroundColor: 'beige' }} style={{ margin: '20px auto' }}>
							<CardContent>{notice}</CardContent>
						</Card>
					)}
					<Box
						marginX={5}
						marginY={5}
						sx={{
							backgroundColor: 'primary.dark' || item.colorBg,
							color: 'common.white' || item.colorText,
							textAlign: 'center',
							paddingY: 6,
							borderRadius: 2,
							boxShadow: 10,
						}}
					>
						{msg}
					</Box>
				</div>
				<Grid>
					<AmazonBanner />
				</Grid>
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
	const paths = exntensions.reduce((acc: any[], ext: BrowserExtension) => {
		const pths = ['install', 'update', 'uninstall'].map((action: string) => {
			return {
				params: { slug: ext.slug.toString(), action: action.toString() },
			};
		});
		return [...acc, ...pths];
	}, []);
	return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug, action } = params as any;
	const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;
	const actionName = extensionActions[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] || null;
	const analyticsEventActions = GAEventsByAction[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] || null;
	const pageMeta: any = {};

	if (item && actionName) {
		pageMeta.title = `${item.name}: ${actionName}`;
		pageMeta.description = item.description;
	} else if (!item) {
		// return {
		//   redirect: {
		//     destination: '/',
		//     permanent: false,
		//   },
		// }
	} else if (!actionName) {
		return {
			redirect: {
				destination: `../${slug}`,
				permanent: false,
			},
		};
	}

	return {
		props: {
			slug,
			action,
			item,
			actionName,
			pageMeta,
			analyticsEventActions,
		},
	};
};

export default ActionPage;
