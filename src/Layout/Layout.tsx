import { PropsWithChildren } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
