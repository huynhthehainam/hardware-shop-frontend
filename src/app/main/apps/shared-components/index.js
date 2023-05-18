import i18n from 'i18n';
import CreateUpdateCustomerDialog from './dialog/CreateUpdateCustomerDialog';
import AcceptanceDialog from './dialog/AcceptanceDialog';
import CreateUpdateProductCategoryDialog from './dialog/CreateUpdateProductCategoryDialog';
import en from './i18n/en';
import vi from './i18n/vi';

i18n.addResourceBundle('en', 'common', en);
i18n.addResourceBundle('vi', 'common', vi);

// eslint-disable-next-line import/prefer-default-export
export { CreateUpdateProductCategoryDialog, CreateUpdateCustomerDialog, AcceptanceDialog };
