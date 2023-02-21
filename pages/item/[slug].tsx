import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Fade, Grid } from "@mui/material";
import exntensions from "../../shared/data";
import { BrowserExtension } from "../../common/interface";
import { GetStaticProps } from "next";
import { trackPageView } from "../../common/utils";

function ItemPage({ slug, item, pageMeta }: any) {
  const itemHtml = (
    <Fade in timeout={500}>
      <Grid container my={5} spacing={0} minHeight={160}>
        <Grid
          xs={12}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
          item={true}
        >
          <Avatar src={item?.logo} sx={{ width: 94, height: 94, mt: 5 }} />
          <Typography variant='h2' fontWeight={600} color='inherit' my={5}>
            {item?.name}
          </Typography>
          {item?.description && (
            <Typography variant='h6' fontWeight={400} color='inherit'>
              {item?.description}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Fade>
  );

  React.useEffect(() => {
    if (!item) {
      return;
    }
    trackPageView();
  }, [item]);

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name='description' content={pageMeta.description} />
      </Head>
      <Container maxWidth='lg'>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div data-testid='item-component'>
            {item ? itemHtml : `404: ${slug} not found!`}
          </div>
        </Box>
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
  const item =
    exntensions.find((e: BrowserExtension) => e.slug === slug) || null;

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
