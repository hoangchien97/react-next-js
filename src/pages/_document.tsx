import React from 'react';
import NextDocument, { DocumentContext } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
// https://javascript.plainenglish.io/ssr-with-next-js-styled-components-and-material-ui-b1e88ac11dfa
// using Material UI error ssr with next js

export default class Document extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />))
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>
        ]
      };
    } finally {
      styledComponentSheet.seal();
    }
  }
}
