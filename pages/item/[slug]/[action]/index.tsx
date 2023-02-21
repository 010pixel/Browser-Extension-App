import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Card, CardContent, Fade, Grid } from "@mui/material";
import exntensions from "../../../../shared/data";
import { BrowserExtension } from "../../../../common/interface";
import { GetStaticProps } from "next";
import { trackPageView, trackPurchase } from "../../../../common/utils";
import {
  extensionActions,
  EXTENSION_ACTIONS,
  GAEventsByAction,
} from "../../../../common/constants";
import { useRouter } from "next/router";
import { getActionMsg, notice } from "./constants";
import { useEffect } from "react";

function ActionPage({
  slug,
  action,
  item,
  actionName,
  pageMeta,
  analyticsEventActions,
}: any) {
  const { query } = useRouter();
  const msg = getActionMsg(
    (action as string)?.toLocaleUpperCase(),
    item,
    query.version as string
  ) as any;

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

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name='description' content={pageMeta.description} />
      </Head>
      <Container maxWidth='lg'>
        <div data-testid='action-component'>
          {["google-meet-easy-mute", "easy-mute-for-google-meet"].includes(
            item.slug
          ) && (
            <Card
              sx={{ maxWidth: 345, backgroundColor: "beige" }}
              style={{ margin: "20px auto" }}
            >
              <CardContent>{notice}</CardContent>
            </Card>
          )}
          <Box
            marginX={5}
            marginY={5}
            sx={{
              backgroundColor: "primary.dark" || item.colorBg,
              color: "common.white" || item.colorText,
              textAlign: "center",
              paddingY: 6,
              borderRadius: 2,
              boxShadow: 10,
            }}
          >
            {msg}
          </Box>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = exntensions.reduce((acc: any[], ext: BrowserExtension) => {
    const pths = ["install", "update", "uninstall"].map((action: string) => {
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
  const item =
    exntensions.find((e: BrowserExtension) => e.slug === slug) || null;
  const actionName =
    extensionActions[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] ||
    null;
  const analyticsEventActions =
    GAEventsByAction[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] ||
    null;
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
