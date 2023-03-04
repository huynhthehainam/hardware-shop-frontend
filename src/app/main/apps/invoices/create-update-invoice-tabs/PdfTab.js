import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Icon } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  '& table ': {
    '& th:first-child, & td:first-child': {
      paddingLeft: `${0}!important`,
    },
    '& th:last-child, & td:last-child': {
      paddingRight: `${0}!important`,
    },
  },

  '& .divider': {
    width: 1,
    backgroundColor: theme.palette.divider,
    height: 144,
  },

  '& .seller': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    marginRight: -88,
    paddingRight: 66,
    width: 480,
    '& .divider': {
      backgroundColor: theme.palette.getContrastText(theme.palette.primary.dark),
      opacity: 0.5,
    },
  },
}));

export default () => {
  const formContext = useFormContext();
  const { t } = useTranslation('invoices');
  const { watch } = formContext;
  const shop = useSelector(({ auth }) => auth.user.shop);
  const invoice = watch();
  if (!invoice.customer || invoice.details.length === 0) {
    return (
      <Typography className="text-13 sm:text-20 mb-16" color="textSecondary">
        {t('GO_BACK_BASIC_AND_DETAILS_MSG')}
      </Typography>
    );
  }
  return (
    <>
      <Root className="flex-grow flex-shrink-0 p-0">
        <div className="w-xl mx-auto mb-12">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {}}
            startIcon={<Icon className="hidden sm:flex">download</Icon>}
          >
            {t('DOWNLOAD_BUTTON')}
          </Button>
        </div>
        <Card className="w-xl mx-auto shadow-0">
          <CardContent className="p-20 print:p-0">
            <div className="flex justify-between">
              <div>
                <table className="mb-8">
                  <tbody>
                    <tr>
                      <td className="pb-4">
                        <Typography className="font-light" variant="h6" color="textSecondary">
                          {t('INVOICE_PDF_HEADER')}
                        </Typography>
                      </td>
                      <td className="pb-4 px-8">
                        <Typography className="font-light" variant="h6" color="inherit">
                          {invoice.code}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Typography color="textSecondary">
                  {invoice.customer && invoice.customer.name}
                </Typography>

                <Typography color="textSecondary">
                  {invoice.customer && invoice.customer.phone}
                </Typography>

                <Typography color="textSecondary">
                  {invoice.customer && invoice.customer.address}
                </Typography>

                <Typography color="textSecondary">
                  {t('TOTAL_COST_LABEL')}: {invoice.totalCost.toLocaleString()} {shop.cashUnitName}
                </Typography>
                <Typography color="textSecondary">
                  {invoice.customerDebt > 0 &&
                    `${t('DEBT_LABEL')}: ${invoice.customerDebt.toLocaleString()} ${
                      shop.cashUnitName
                    }`}
                </Typography>
                <Typography color="textSecondary">
                  {t('DEPOSIT_LABEL')}: {invoice.deposit.toLocaleString()} {shop.cashUnitName}
                </Typography>
                <Typography color="textSecondary">
                  {t('REST_LABEL')}: {invoice.rest.toLocaleString()} {shop.cashUnitName}
                </Typography>
              </div>

              <div className="seller flex items-center p-16">
                <img className="w-80" src={shop.logoUrl} alt="logo" />

                <div className="divider mx-8 h-96" />

                <div className="px-8">
                  <Typography color="inherit">{shop.name}.</Typography>

                  <Typography color="inherit">{shop.address}</Typography>
                  {shop.phones &&
                    shop.phones.map((phone, index) => (
                      <Typography key={index} color="inherit">
                        {`${phone} (${shop.phoneOwners[index]})`}
                      </Typography>
                    ))}
                  {shop.emails &&
                    shop.emails.map((email) => <Typography color="inherit">{email}</Typography>)}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Table className="simple">
                <TableHead>
                  <TableRow>
                    <TableCell>{t('PRODUCT_LABEL')}</TableCell>
                    <TableCell align="right">{t('PRICE_LABEL')}</TableCell>
                    <TableCell align="right">{t('QUANTITY_LABEL')}</TableCell>
                    <TableCell align="right">{t('TOTAL_COST_LABEL')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoice.details.map((detail, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography variant="subtitle1">{detail.productName}</Typography>
                        <Typography>{detail.description}</Typography>
                      </TableCell>
                      <TableCell align="right">{`${detail.price.toLocaleString()} ${
                        shop.cashUnitName
                      }`}</TableCell>
                      <TableCell align="right">{detail.quantity}</TableCell>
                      <TableCell align="right">{`${detail.totalCost.toLocaleString()} ${
                        shop.cashUnitName
                      }`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </Root>
    </>
  );
};
