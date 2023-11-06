import React from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { EXTENSION_ACTIONS } from '../common/constants';
import { BrowserExtension } from '../common/interface';
import ChangeLog from './components/ChangeLog/ChangeLog';

export const noticeEasyMuteForGoogleMeet = (
	<Box
		sx={{
			// maxWidth: 800,
			width: '100%',
			mx: 'auto',
			my: 3,
		}}
	>
		<Paper
			elevation={3}
			sx={{
				p: 5,
				display: 'flex',
				flexDirection: 'column',
				gap: 1.5,
			}}
			component="div"
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column-reverse',
						sm: 'row',
					},
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2,
				}}
			>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, mb: 3 }}>
					<Box
						sx={{
							display: 'flex',
							p: 0.5,
							fontSize: 40,
						}}
					>
						📝
					</Box>
					<Typography variant="h4" fontWeight={700}>
						Note from me, the developer
					</Typography>
				</Box>
				<Paper
					elevation={5}
					sx={{
						width: 150,
						height: 150,
						borderRadius: '50%',
						border: '2px solid',
						borderColor: 'white',
					}}
				>
					<Avatar
						src="/images/me.jpg"
						sx={{
							width: '100%',
							height: '100%',
						}}
					/>
				</Paper>
			</Box>
			<Typography component="div" gutterBottom>
				👋 Hello Amazing Folks,
			</Typography>
			<Typography component="div">
				I have been building 👨‍💻 and maintaining free software 🛠️ for over a decade 🗓️ now.
			</Typography>
			<Typography component="div">
				🙏 Thanks to all of you for using them and continuing to encourage 🥳 me with your good review comments 🎤. Your
				support has kept me motivated to build better features to solve your problems 👏.
			</Typography>
			<Typography component="div">
				I would <b>love to keep building and giving my extensions for free</b> to all of you. However, a month ago, I
				have{' '}
				<Typography
					component="span"
					sx={{
						fontWeight: 700,
						fontSize: 28,
						color: 'primary.main',
					}}
				>
					Lost my Job
				</Typography>
				, so I need to find ways to continue support myself. I <b>need your support</b> in this situation to help me
				continue keep building and improving my extensions and continue to server all of you 🤝.
			</Typography>
			<Typography component="div">
				To make sure all of you{' '}
				<Typography component="span" color="warning" fontWeight={600}>
					don’t have sudden interruption
				</Typography>
				, I will{' '}
				<Typography component="span" color="warning" fontWeight={600}>
					continue
				</Typography>{' '}
				to keep the basic features for free and charge for the premium features. I wish many of you will buy the Premium
				subscriptions and{' '}
				<Typography component="span" color="warning" fontWeight={600} fontStyle="italic">
					help me to pass through this situation
				</Typography>{' '}
				🙏 .
			</Typography>
			<Typography component="div" fontWeight={700}>
				Thank you For Supporting,
				<Typography fontWeight={500}>010Pixel</Typography>
			</Typography>
			<Typography component="div" variant="h3">
				😊
			</Typography>
		</Paper>
	</Box>
);

export const installMsg = (item: BrowserExtension) => (
	<>
		<Typography variant="h2" fontWeight={700}>
			Thank you
		</Typography>
		<Typography variant="h5" fontWeight={300} marginY={2}>
			For downloading <strong>{item.name}</strong>
		</Typography>
		<Typography variant="h3">😊</Typography>
	</>
);

export const updateMsg = (item: BrowserExtension, version: string) => {
	const changelogData = (item.changelog || [])?.filter((cgItem) => cgItem.version === version);
	return (
		<>
			<Typography variant="h2" fontWeight={700}>
				Thank you
			</Typography>
			<Typography variant="h5" fontWeight={300} marginY={2}>
				<strong>{item.name}</strong> has been updated to{' '}
			</Typography>
			<Typography variant="h4" fontWeight={600}>
				{version ? `v${version}` : 'latest version'}
			</Typography>
			{changelogData.length > 0 && (
				<Box
					sx={{
						maxWidth: 700,
						px: 1,
						mx: 'auto',
						'.MuiTypography-overline, .MuiTypography-subtitle1, ul': { textAlign: 'left' },
						'.MuiTypography-overline, .MuiTypography-subtitle1': { fontSize: '1rem' },
						'ul li': {
							fontSize: '0.9rem',
						},
					}}
				>
					<ChangeLog data={changelogData} title="What's New" />
				</Box>
			)}
			<Typography variant="h3">😊</Typography>
		</>
	);
};
export const uninstallMsg = (item: BrowserExtension) => (
	<>
		<Typography variant="h4" fontWeight={400}>
			So sad 😢 to see you go
		</Typography>
		<Typography variant="h3" fontWeight={600} marginY={2}>
			✨ How can I do better?
		</Typography>
		{item.feedbackForm && (
			<Box
				sx={{
					background: '#fff',
					display: 'inline-block',
					borderRadius: 2,
					pt: 3,
					overflowX: 'auto',
					maxWidth: '100%',
				}}
			>
				<iframe title="feedback-form" src={item.feedbackForm} width="640" height="923" frameBorder={0}>
					Loading…
				</iframe>
			</Box>
		)}
		<Typography variant="h3">😢</Typography>
	</>
);

export const getActionMsg = (action: string, item: BrowserExtension, version: string) => {
	if (action === EXTENSION_ACTIONS.INSTALL) {
		return installMsg(item);
	}
	if (action === EXTENSION_ACTIONS.UPDATE) {
		return updateMsg(item, version as string);
	}
	return uninstallMsg(item);
};
