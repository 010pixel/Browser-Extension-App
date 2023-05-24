import * as React from 'react';

interface AmazonBannerProps {}

const AmazonBanner: React.FC<AmazonBannerProps> = () => {
	return (
		<div
			style={{ textAlign: 'center', margin: '20px 0' }}
			dangerouslySetInnerHTML={{
				__html: `
                    <script type="text/javascript" language="javascript">
                        var aax_size='728x90';
                        var aax_pubname = '010pixel-21';
                        var aax_src='302';
                    </script>
                    <script type="text/javascript" language="javascript" src="https://c.amazon-adsystem.com/aax2/assoc.js"></script>
                `,
			}}
		/>
	);
};

export default AmazonBanner;
