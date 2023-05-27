import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import { BrowserExtension } from '@/common/interface';
import exntensions from '@/shared/data';

function ItemPage({ currentSlug }: any) {
	const { query } = useRouter();
	const { page, version } = query as any;
	// eslint-disable-next-line
	const action = page ? `install` : version ? `update` : ``;

	useEffect(() => {
		if (currentSlug && action) {
			window.location.href = `/item/${currentSlug}/${action}/?version=${version}`;
		}
	}, [version, currentSlug, action]);

	return <main>redirecting...</main>;
}

export function getStaticParams() {
	return ['version', 'page'];
}

export async function getStaticPaths() {
	const paths = exntensions.map((ext: BrowserExtension) => ({
		params: { currentSlug: ext.slug.toString() },
	}));
	return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	return {
		props: {
			currentSlug: (params as any).currentSlug,
		},
	};
};

export default ItemPage;
